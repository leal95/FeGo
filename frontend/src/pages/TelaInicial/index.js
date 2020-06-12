import React from 'react';
import { MaterialCommunityIcons, SimpleLineIcons, MaterialIcons } from '@expo/vector-icons'
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
            <View style={styles.header}>
                <Text style={styles.headerText}>Tela Inicial</Text>
            </View> 

            <View style={styles.user}>
                <View style={styles.userFoto}></View>
                <Text style={styles.userName}> {dados.nome} {dados.sobrenome}</Text>
            </View>  

            <View style={styles.botoesIniciais}>
                <TouchableOpacity style={styles.botaoInicial}>
                    <MaterialCommunityIcons
                    name="car-hatchback"
                    size={60}
                    color="#F2CA04"/> 
                </TouchableOpacity> 
                <TouchableOpacity style={styles.botaoInicial}>
                    <MaterialCommunityIcons
                    name="history"
                    size={55}
                    color="#F2CA04"/>  
                </TouchableOpacity>
            </View>

            <View style={styles.botoesIniciais}>
                <TouchableOpacity 
                style={styles.botaoInicial}
                onPress={() => navigateToPage('Perfil')}>
                    <MaterialIcons
                    name="person-outline"
                    size={55}
                    color="#F2CA04"/>
                </TouchableOpacity> 


                <TouchableOpacity style={styles.botaoInicial}>
                    <MaterialCommunityIcons
                    name="message-text-outline"
                    size={55}
                    color="#F2CA04"/>
                </TouchableOpacity> 
            </View>

            <View style={styles.botoesCaronas}>
                <TouchableOpacity style={styles.botaoCarona} 
                onPress={()=>navigateToPage('PublicarCarona')}>
                    <Text style={styles.textCaronas}>Oferecer</Text>
                    <Text style={styles.textCaronas}>Carona</Text>
                </TouchableOpacity> 
                
                <TouchableOpacity style={styles.botaoCarona}
                onPress ={()=>navigateToPage('ListarCaronas')}>
                    <Text style={styles.textCaronas}>Procurar</Text>
                    <Text style={styles.textCaronas}>Carona</Text>
                </TouchableOpacity> 
            </View>
        </View>
        </>
    )
}