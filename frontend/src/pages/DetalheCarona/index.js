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

    let dados = route.params.dados;

    let keyExtractorCounter = 0;

    const infosCarona = route.params.infosCarona;

    function verifKeyExtractor(pessoa){
        if(pessoa){
            return pessoa
        }
        else{
            keyExtractorCounter++;
            return `${keyExtractorCounter}`
        }
    }

    async function getDadosDoMotorista() {
        const response = await api.get(`/sessions/?email=${infosCarona.email}`);

        setInfosMotorista(response.data);
    }

    async function getDadosDosPassageiros() {
        if(infosCarona.passageiros){
            var vetorDePassageiros = [];
            const emailPassageiros = infosCarona.passageiros.split(",");
        
            if(emailPassageiros){
                for(var i = 0; i<emailPassageiros.length;i++){
                    const response = await api.get(`/sessions/?email=${emailPassageiros[i]}`);

                    vetorDePassageiros.push(response.data[0]);
                }
                setInfosPassageiros(vetorDePassageiros);
            }
        }
        else return
    }

    useEffect(() => {
        getDadosDoMotorista();
        getDadosDosPassageiros();
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
        var vagasAtt = infosCarona.vagas - 1;

        const info = ({
            passageiros: [infosCarona.passageiros, dados.email].join(),
            vagas: vagasAtt
        });

        try{
            await api.put(`/caronas/${infosCarona.id}`, info);

            alert("Você foi inserido(a) na carona");

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

            alert("Você foi inserido(a) na lista de espera");

            navigation.navigate('TelaInicial');
        }
        catch(err){
            alert('Erro ao fazer alteração das informações!');
        };
    }

    function mostrarDetalhesCarona(){
        return(
            <>
                <View style={styles.Caronas} >
                    <View style={styles.CaronasInfo}>
                        <Text style={styles.CaronasTextMid}> {infosCarona.dia} / {infosCarona.mes} / {infosCarona.ano} </Text>
                        <Text style={styles.CaronasText}> {infosCarona.origem}
                        <Text style={styles.Linhas}> {'-->'} </Text>
                        {infosCarona.destino.split(",")[0]}</Text>
                        <Text style={styles.CaronasTextMid}> {infosCarona.hora}:{infosCarona.minuto} </Text>
                        <View style={styles.CaronasViewVP}>
                            <Text style={styles.CaronasTextVP}> Vagas: {infosCarona.vagas} </Text>
                            <Text style={styles.CaronasTextVP}> Preco: {infosCarona.preco} reais </Text>
                        </View>
                        <Text style={styles.CaronasTextMid}>OBS: {infosCarona.obs}</Text>
                    </View>
                </View>
            </>
        )
    }

    function mostrarMotorista() {
        if(infosMotorista){
            return(
                <>
                    <View style={styles.espacamento}></View>
                    <Text style={styles.description} >Motorista:</Text>
                    <Text style={styles.text}> {infosMotorista[0].nome} {infosMotorista[0].sobrenome} ({infosMotorista[0].apelido}) </Text>
                    <Text style={styles.description}> Modelo do Carro: {infosMotorista[0].modeloCarro}</Text>
                    <Text style={styles.description}> Placa do Carro: {infosMotorista[0].placaCarro}</Text>
                    <Text style={styles.description}> Fumante: {infosMotorista[0].fumante} </Text>
                    <Text style={styles.description}> Curso: {infosMotorista[0].curso} </Text>
                    <Text style={styles.description}> Musicas: {infosMotorista[0].musica} </Text>
                </>
            )
        }
        else{
            return
        }
    }

    function mostrarPassageiro(passageiro){
        if(passageiro){
            return(
                <>
                    <View style={{marginBottom: 20}}>
                            <Text style={styles.text}> {passageiro.nome} {passageiro.sobrenome} ({passageiro.apelido}) </Text>
                            <Text style={styles.description}> Curso: {passageiro.curso} </Text>
                            <Text style={styles.description}> Musica: {passageiro.musica} </Text>
                        </View>
                </>
            )
        }
        else{
            return
        }
    }
    
    return(
        <View style={styles.container}>
            <Feather name="arrow-left" size={30} color="#858585" onPress = {navigation.goBack}/>
            <View style={styles.header}></View>

            <FlatList style={styles.passaDescri}
                ListHeaderComponent={
                    <>
                        {mostrarDetalhesCarona()}
                        
                        {mostrarMotorista()}


                        <Text style={styles.passaDescri}>Passageiro(s):</Text>
                    </>
                }
                data = {infosPassageiros}
                keyExtractor={pessoa => verifKeyExtractor(pessoa)}
                showsVerticalScrollIndicator = {false}
                renderItem = {({item: pessoa})=>(
                    mostrarPassageiro(pessoa)
                )}
                ListFooterComponent={
                    botoesSolicitarCarona()
                }
                />
        </View>
    )
}