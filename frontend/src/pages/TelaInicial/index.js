import React from 'react';
import { Feather, MaterialCommunityIcons, SimpleLineIcons, } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Text, TouchableOpacity } from 'react-native';
//importando react, ícones, useNavigation, useRoute e componentes do react native necessários

import styles from './styles'
//importando estilos do arquivo styles.js

export default function Cadastro() {
    const route = useRoute();
    const navigation = useNavigation();

    const dados = route.params.dados;

    function navigateToLogin() {
        navigation.navigate('Login');
    };//função para navegar para a página de Login
  
    function navigateToPage(page) {
        navigation.navigate(page, { dados });
    } //função para navegar para alguma página junto com os dados

    return(
        <>
        <View style={styles.container}>
            <Feather name="arrow-left" size={24} color="#999" onPress={navigateToLogin} /> {/* Botão de voltar */}
            <View style={styles.header}>
                <Text style={styles.headerText}>Tela Inicial</Text>
            </View> {/* Texto do cabeçalho */}

            <View style={styles.user}>
                <View style={styles.userFoto}></View>
                <Text style={styles.userName}> {dados.nome} {dados.sobrenome}</Text>
            </View>  {/* Foto de perfil + Nome do usuário */}

            <View style={styles.botoesIniciais}>
                <TouchableOpacity style={styles.botaoInicialAzul}>
                    <MaterialCommunityIcons
                    name="car-hatchback"
                    size={36}
                    color="white"/> 
                </TouchableOpacity> {/* Botão do carrinho */}

                <TouchableOpacity style={styles.botaoInicialAzul}>
                    <MaterialCommunityIcons
                    name="history"
                    size={36}
                    color="white"/>  
                </TouchableOpacity> {/* botão de histórico */}
            </View> 

            <View style={styles.botoesIniciais}>
                <TouchableOpacity 
                style={styles.botaoInicialAmarelo}
                onPress={() => navigateToPage('Perfil')}>
                    <SimpleLineIcons
                    name="settings"
                    size={34}
                    color="white"/>
                </TouchableOpacity> {/* botão da engrenagem */}

                <TouchableOpacity style={styles.botaoInicialAmarelo}>
                    <MaterialCommunityIcons
                    name="message-text-outline"
                    size={34}
                    color="white"/>
                </TouchableOpacity> {/* botão de mensagem */}
            </View>

            <View style={styles.botoesCaronas}>
                <TouchableOpacity style={styles.botaoCarona}
                onPress ={()=>navigateToPage('Caronas')}>
                    <Text style={styles.textCaronas}>Procurar</Text>
                    <Text style={styles.textCaronas}>Carona</Text>
                </TouchableOpacity> {/* Botão "Procurar Carona" */}

                <TouchableOpacity style={styles.botaoCarona} 
                onPress={()=>navigateToPage('PublicarCarona')}>
                    <Text style={styles.textCaronas}>Oferecer</Text>
                    <Text style={styles.textCaronas}>Carona</Text>
                </TouchableOpacity> {/* Botão "Oferecer Carona" */}
            </View>
        </View>
        </>
    )
}