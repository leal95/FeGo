import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';
import { FlatList } from 'react-native-gesture-handler';
import api from '../../services/api'; 

export default function Mensagens() { 
    const route = useRoute();
    const navigation = useNavigation();

    const dados = route.params.dadosAnt;

    const [mensagens, setMensagens] = useState([]);

    async function carregarMensagens() {
        const response = await api.get(`/usuarios/mensagens/?destinatarioEmail=${dados.email}`);

        setMensagens(response.data);
    }

    useEffect(() => {
        carregarMensagens();
    }, []) 

    async function aceitarMensagem(infosMensagem) {
        const resposta = ({
            desinatarioEmail: infosMensagem.emissarioEmail,
            desinatarioNome: infosMensagem.emissarioNome,
            emissarioEmail: infosMensagem.desinatarioEmail,
            emissarioNome: infosMensagem.desinatarioNome,
            mensagem: `Olá, eu gostaria de avisar aceitei sua solicitação de carona! Agradeço o seu pedido e nos vemos em breve!`
        }); 

        const response = await api.post(`/usuarios/mensagens`, {resposta});

        console.log(response.data);
    }

    async function rejeitarMensagem(infosMensagem) {
        const resposta = ({
            desinatarioEmail: infosMensagem.emissarioEmail,
            desinatarioNome: infosMensagem.emissarioNome,
            emissarioEmail: infosMensagem.desinatarioEmail,
            emissarioNome: infosMensagem.desinatarioNome,
            mensagem: `Olá, eu gostaria de avisar que não pude aceitar sua solicitação de carona! Agradeço o pedido e te desejo tudo de bom!`
        }); 

        await api.post(`/usuarios/mensagens`, {resposta});

        console.log(response.data);
    }

    return(
        <View style={styles.container}>
                <Feather name="arrow-left" size={24} color="#858585" onPress = {navigation.goBack}/>
            <View style={styles.header}><Text style= {styles.headerText}>Mensagens</Text></View>
            
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