import React from 'react';
import { MaterialCommunityIcons, SimpleLineIcons, } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles'

export default function Cadastro() {
    const route = useRoute();
    const navigation = useNavigation();

    const dados = route.params.dados;

    function navigateToLogin() {
        navigation.navigate('Login');
    };
  
    function navigateToPage(page) {
        navigation.navigate(page, { dados });
    }

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
                    size={36}
                    color="#347EBF"/> 
                </TouchableOpacity>
                <TouchableOpacity style={styles.botaoInicial}>
                    <MaterialCommunityIcons
                    name="history"
                    size={36}
                    color="#347EBF"/>  
                </TouchableOpacity>
            </View>

            <View style={styles.botoesIniciais}>
                <TouchableOpacity 
                style={styles.botaoInicial}
                onPress={() => navigateToPage('Perfil')}>
                    <SimpleLineIcons
                    name="settings"
                    size={34}
                    color="#347EBF"/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botaoInicial}>
                    <MaterialCommunityIcons
                    name="message-text-outline"
                    size={34}
                    color="#347EBF"/>
                </TouchableOpacity>
            </View>

            <View style={styles.botoesCaronas}>
                <TouchableOpacity style={styles.botaoCarona}>
                    <Text style={styles.textCaronas}>Procurar</Text>
                    <Text style={styles.textCaronas}>Carona</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botaoCarona}>
                    <Text style={styles.textCaronas}>Oferecer</Text>
                    <Text style={styles.textCaronas}>Carona</Text>
                </TouchableOpacity>
            </View>
        </View>
        </>
    )
}