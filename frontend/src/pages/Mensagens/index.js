import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';
import { FlatList } from 'react-native-gesture-handler';
import api from '../../services/api'; 

export default function Mensagens() { 
    const route = useRoute();
    const navigation = useNavigation();

    const dados = route.params.dados;

    const [mensagens, setMensagens] = useState([]);

    async function carregarMensagens() {
        const response = await api.get(`/usuarios/mensagens/?destinatarioEmail=${dados.email}`);

        setMensagens(response.data);
    }

    useEffect(() => {
        carregarMensagens();
    }, []) 

    async function aceitarMensagem(infosMensagem) {
        const response = await api.get('/caronas');

        let carona = {};

        if(response.data){
            response.data.map( elemento => {
                if(elemento.id == infosMensagem.idCarona){
                    carona = elemento
                }
            })
        }

        if(carona.vagas > 0){
            aceitarUsuario(carona, infosMensagem);
        }
    }

    async function aceitarUsuario(infosCarona, infosMensagem) {
        let listaEspera = "";

        if(infosCarona.listaEspera){
            listaEspera = infosCarona.listaEspera.replace(`${infosMensagem.emissarioEmail},`, "")
        }

        const resposta = ({
            desinatarioEmail: infosMensagem.emissarioEmail,
            desinatarioNome: infosMensagem.emissarioNome,
            emissarioEmail: infosMensagem.desinatarioEmail,
            emissarioNome: infosMensagem.desinatarioNome,
            mensagem: `Olá, ${infosMensagem.destinatarioNome}! 
            Aceitei sua solicitação de carona! Agradeço o pedido e nos vemos em breve!`
        }); 

        const info = ({
            passageiros: [infosCarona.passageiros, dados.email].join(),
            vagas: infosCarona.vagas - 1,
            listaEspera,
        });

        try{
            await api.put(`/caronas/${infosMensagem.idCarona}`, info);

            await api.post(`/usuarios/mensagens`, resposta);

            alert(`${infosMensagem.emissarioNome} foi aceito na carona`);
        }
        catch(err){
            alert('Ocorreu um erro ao aceitar o pedido de carona, tente novamente mais tarde');
        };
    }

    async function rejeitarMensagem(infosMensagem) {
        const response = await api.get('/caronas');

        let carona = {};

        if(response.data){
            response.data.map( elemento => {
                if(elemento.id == infosMensagem.idCarona){
                    carona = elemento
                }
            })
        }

        rejeitarUsuario(carona, infosMensagem);
    }

    async function rejeitarUsuario(infosCarona, infosMensagem) {
        let listaEspera = "";

        if(carona.listaEspera){
            listaEspera = infosCarona.listaEspera.replace(`${infosMensagem.emissarioEmail},`, "")   
        }

        const resposta = ({
            desinatarioEmail: infosMensagem.emissarioEmail,
            desinatarioNome: infosMensagem.emissarioNome,
            emissarioEmail: infosMensagem.desinatarioEmail,
            emissarioNome: infosMensagem.desinatarioNome,
            mensagem: `Olá, eu gostaria de avisar que não pude aceitar sua solicitação de carona mas agradeço o seu pedido!`
        });

        const info = ({
            listaEspera,
        });

        try{
            await api.put(`/caronas/${infosMensagem.idCarona}`, info);

            await api.post(`/usuarios/mensagens`, resposta);

            alert(`${infosMensagem.emissarioNome} foi rejeitado da carona
            Aguarde enquanto confirmamos se não há outro pedido`);

            if(listaEspera){
                const emailPassageiro = infosCarona.listaEspera.split(",")[0];

                const response = await api.get(`/sessions/?email=${emailPassageiro}`)

                const dadosDoPassageiro = response.data[0];

                const novoPedido = ({
                    desinatarioEmail: dados.email,
                    desinatarioNome: dados.nome,
                    emissarioEmail: dadosDoPassageiro.email,
                    emissarioNome: dadosDoPassageiro.nome,
                    mensagem: infosMensagem.mensagem.replace(`${infosMensagem.emissarioNome}`, `${dadosDoPassageiro.nome}`),
                });

                await api.post(`/usuarios/mensagens`, novoPedido);

                alert(`Há mais uma solicitação de carona, vinda de ${dadosDoPassageiro.nome}.
                Recarregue esta página (saindo e entrando novamente) para visualizar`)
            }
        }
        catch(err){
            alert('Ocorreu um erro ao aceitar o pedido de carona, tente novamente mais tarde');
        };
    }

    return(
        <View style={styles.container}>
                <Feather name="arrow-left" size={24} color="#858585" onPress = {navigation.goBack}/>
            <View style={styles.header}><Text style= {styles.headerText}>Mensagens Recebidas</Text></View>
            
            <FlatList 
            style={styles.MensagensList}
            keyExtractor={item => String(item.id)}
            data = {mensagens}
            renderItem ={ ({item: mensagem}) => (
                <View style={styles.Mensagens}>
                <TouchableOpacity style={styles.userFoto} 
                onPress={() => alert("Seria legal aparecer o perfil da pessoa, quando clicado")}>
                </TouchableOpacity>
                <View style={styles.Conteudo}>
                <Text style = {styles.Conteudo}>{mensagem.emissarioNome} </Text>
                <Text style = {styles.Conteudo}>{mensagem.mensagem} </Text>
                </View>
                <View style={{justifyContent: 'space-evenly'}}>
                <MaterialCommunityIcons style = {styles.Icons} 
                name = "check" size={30} color="white"
                onPress={() => aceitarMensagem(mensagem)}/>

                <MaterialCommunityIcons style = {styles.Icons} 
                name = "close" size={30} color="white"
                onPress={() => rejeitarMensagem(mensagem)}/>

                </View>
                </View>)}/>
        </View>
    )
}