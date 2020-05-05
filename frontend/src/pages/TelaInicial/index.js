import React from 'react';
import { Feather } from '@expo/vector-icons'
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

    return(
        <View style={styles.container}>
            <Feather name="arrow-left" size={24} color="#999" onPress={navigateToLogin} />
            <View style={styles.header}>
                <Text style={styles.headerText}>Olá, {dados.nome}</Text>
            </View>

            <View style={styles.user}>
                <View style={styles.userFoto}></View>
                <Text style={styles.userName}> {dados.nome} {dados.sobrenome}</Text>
            </View>

            <View style={styles.botoesIniciais}>
                <TouchableOpacity style={styles.botaoInicial}>

                </TouchableOpacity>
                <TouchableOpacity style={styles.botaoInicial}>
                    
                </TouchableOpacity>
            </View>

            <View style={styles.botoesIniciais}>
                <TouchableOpacity style={styles.botaoInicial}>

                </TouchableOpacity>
                <TouchableOpacity style={styles.botaoInicial}>
                    
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
    )
}