import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import { FlatList } from 'react-native-gesture-handler';
import api from '../../services/api'; 

export default function detalheCaronas() { 
    const route = useRoute();
    const navigation = useNavigation();

    const [infosMotorista, setInfosMotorista] = useState('');

    const [infosPassageiros, setInfosPassageiros] = useState([]);
    const [listaEspera, setListaEspera] = useState([]);

    let dados = route.params.dados;

    let keyExtractorCounter = 0;
    let listaParaRenderizar = infosPassageiros.concat(listaEspera);

    const infosCarona = route.params.infosCarona;

    function verifKeyExtractor(pessoa){
        /*if(pessoa){
            return pessoa.email
        }
        else{*/
            keyExtractorCounter++;
            return `${keyExtractorCounter}`
        //}
    }

    async function getDadosDoMotorista() {
        const response = await api.get(`/sessions/?email=${infosCarona.email}`);

        setInfosMotorista(response.data);
    }

    async function getDadosDosPassageiros() {
        if(infosCarona.passageiros){
            let vetorDePassageiros = [];
            const emailPassageiros = infosCarona.passageiros.split(",");
        
            if(emailPassageiros){
                for(let i = 0; i<emailPassageiros.length;i++){
                    const response = await api.get(`/sessions/?email=${emailPassageiros[i]}`);

                    vetorDePassageiros.push(response.data[0]);
                }
                setInfosPassageiros(vetorDePassageiros);
            }
        }
        else return
    }

    async function getDadosDaListaEspera() {
        if(infosCarona.listaEspera){
            let vetorDePassageiros = [];
            const emailPassageiros = infosCarona.listaEspera.split(",");
        
            if(emailPassageiros){
                for(let i = 0; i<emailPassageiros.length;i++){
                    const response = await api.get(`/sessions/?email=${emailPassageiros[i]}`);

                    vetorDePassageiros.push(response.data[0]);
                }
                setListaEspera(vetorDePassageiros);
            }
        }
        else return
    }

    useEffect(() => {
        getDadosDoMotorista();
        getDadosDosPassageiros();
        getDadosDaListaEspera();
    }, [])

    function botoesSolicitarCarona() {
        if(infosCarona.vagas > 0){
            return (
                <>
                    <TouchableOpacity 
                    style={styles.botaoPedirCarona} 
                    onPress={() => solicitarCarona()}>
                        <Text style={styles.textPedirCarona}>Pedir Carona</Text>
                    </TouchableOpacity> 
                </>
            );
        }
        else{
            return (
                <TouchableOpacity 
                style={styles.botaoEsperaCarona} 
                onPress={() => colocarEmEspera()}>
                    <Text style={styles.textEsperaCarona}>Aguardar Vaga</Text>
                </TouchableOpacity> 
            );
        }
    }

    async function solicitarCarona() {
        const pedido = ({
            mensagem: `Olá ${infosMotorista[0].nome}, me chamo ${dados.nome}
            Eu gostaria de pegar a carona contigo na data: ${infosCarona.dia} / ${infosCarona.mes} / ${infosCarona.ano} às ${infosCarona.hora}:${infosCarona.minuto}`,
            destinatarioEmail: infosCarona.email,
            destinatarioNome: infosMotorista[0].nome,
            emissarioEmail: dados.email,
            emissarioNome: dados.nome,
            idCarona: infosCarona,
        })

        const info = ({
            listaEspera: [infosCarona.listaEspera, dados.email].join(),
        });

        try{
            await api.put(`/caronas/${infosCarona.id}`, info);

            await api.post(`/usuarios/mensagens`, pedido);

            alert("Sua solicitação foi enviada à/ao motorista, agora é só esperar pela resposta");

            navigation.navigate('TelaInicial');
        }
        catch(err){
            alert('Erro ao fazer alteração das informações!');
        };
    }

    async function colocarEmEspera() {
        const info = ({
            listaEspera: [infosCarona.listaEspera, dados.email].join(),
        });

        try{
            await api.put(`/caronas/${infosCarona.id}`, info);

            alert("Você foi inserido(a) na lista de espera, assim que alguém sair da carona");

            navigation.navigate('TelaInicial');
        }
        catch(err){
            alert('Erro ao fazer alteração das informações!');
        };
    }
    
    return(
        <View style={styles.container}>
            <Feather name="arrow-left" style={{marginBottom: 10}} size={30} color="#858585" onPress = {navigation.goBack}/>

            <FlatList
                ListHeaderComponent={
                    <>
                        <View style={styles.Caronas} >
                            <View style={styles.CaronasInfo}>
                                <Text style={{color: '#ddd', alignSelf: 'center'}}> {infosCarona.dia} / {infosCarona.mes} / {infosCarona.ano} </Text>
                                <Text style={styles.CaronasText}> {infosCarona.origem}</Text>
                                <Text style={styles.CaronasText}> {infosCarona.origem}</Text>
                                <Feather style={{alignSelf: 'center'}} name="arrow-down" size={20} color="#fff"/>
                                <Text style={styles.CaronasText}>{infosCarona.destino.split(",")[0]}</Text>
                                <Text style={{color: '#ddd', alignSelf: 'center', margin: 5}}> {infosCarona.hora}:{infosCarona.minuto} </Text>
                                <Text style={{color: '#ddd', fontWeight: 'bold'}}> Paradas: {infosCarona.destino} </Text>
                                <View style={styles.CaronasViewVP}>
                                    <Text style={{color: '#ddd', fontWeight: 'bold'}}> Vagas: {infosCarona.vagas} </Text>
                                    <Text style={{color: '#ddd', fontWeight: 'bold'}}> Preco: {infosCarona.preco} reais </Text>
                                </View>
                                <Text style={{color: '#ddd', alignSelf: 'center'}}>OBS: {infosCarona.obs}</Text>
                            </View>
                        </View>

                        {(infosMotorista) ?
                        <>
                            <View style={{margin: 10}}>
                                <Text style={styles.text}>Motorista:</Text>
                                <Text style={styles.description}> {infosMotorista[0].nome} {infosMotorista[0].sobrenome} ({infosMotorista[0].apelido}) </Text>
                                <Text style={styles.description}> Modelo do Carro: {infosMotorista[0].modeloCarro}</Text>
                                <Text style={styles.description}> Placa do Carro: {infosMotorista[0].placaCarro}</Text>
                                <Text style={styles.description}> Cor do Carro: {infosMotorista[0].corCarro}</Text>
                            </View>
                        </>
                        :
                        null}


                        <Text style={styles.text}>Passageiro(s):</Text>
                    </>
                }
                data = {listaParaRenderizar}
                keyExtractor={pessoa => verifKeyExtractor(pessoa)}
                showsVerticalScrollIndicator = {false}
                renderItem = {({item: pessoa, index})=>(
                    (pessoa && index < infosPassageiros.length-1) ?
                    <>
                        <View style={{marginBottom: 10}}>
                            <Text style={styles.description}>{pessoa.nome} {pessoa.sobrenome} ({pessoa.apelido}) </Text>
                        </View>
                    </>
                    :
                    (pessoa && index === infosPassageiros.length-1) ?
                    <>
                        <View style={{marginBottom: 10}}>
                            <Text style={styles.description}>{pessoa.nome} {pessoa.sobrenome} ({pessoa.apelido}) </Text>
                            <Text></Text>
                            <Text style={styles.text}>Lista de Espera:</Text>
                        </View>
                    </>
                    :
                    (pessoa) ?
                    <View style={{marginBottom: 10}}>
                        <Text style={styles.description}>{pessoa.nome} {pessoa.sobrenome} ({pessoa.apelido}) </Text>
                    </View>
                    :
                    null
                )}
                ListFooterComponent={
                    <>
                        {botoesSolicitarCarona()}
                    </>
                }
                />
        </View>
    )
}