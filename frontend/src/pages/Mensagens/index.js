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
        //const response = await api.get('/usuarios/mensagens/?destinatario=${emailDaCarona}');

        //setMensagens(response.data);
    }

    useEffect(() => {
        carregarMensagens();
    }, []) 

    function responderMensagem() {
        //abrir textinput, enviar mensagem
        alert("Responder Mensagem")
    }

    function aceitarMensagem() {
        //colocar a pessoa na carona desejada e atualizar
        alert("Mensagem Aprovada")
    }

    function rejeitarMensagem() {
        //enviar mensagem à pessoa informando que foi rejeitada e remover ela da lista de espera
        alert("Mensagem Rejeitada")
    }

    return(
        <View style={styles.container}>
                <Feather name="arrow-left" size={24} color="#858585" onPress = {navigation.goBack}/>
            <View style={styles.header}><Text style= {styles.headerText}>Mensagens</Text></View>
            
            <FlatList 
            style={styles.MensagensList}
            keyExtractor={item => String(item)}
            data = {[1,2,3,4]}
            renderItem ={ () => (
                <View style={styles.Mensagens}>
                <TouchableOpacity style={styles.userFoto} 
                onPress={() => alert("Seria legal aparecer o perfil da pessoa, quando clicado")}>
                </TouchableOpacity>
                <View style={styles.Conteudo}>
                <Text style = {styles.Conteudo}>Nome</Text>
                <Text style = {styles.Conteudo}>Mensagem Aqui AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</Text>
                </View>
                <View> 
                <MaterialCommunityIcons style = {styles.Icons} 
                name = "message-reply-text" size={30} color="white"
                onPress={() => responderMensagem()}/>

                <MaterialCommunityIcons style = {styles.Icons} 
                name = "check" size={30} color="white"
                onPress={() => aceitarMensagem()}/>

                <MaterialCommunityIcons style = {styles.Icons} 
                name = "close" size={30} color="white"
                onPress={() => rejeitarMensagem()}/>

                </View>
                </View>)}/>
        </View>
    )
}