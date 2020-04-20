import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import { TextInput } from 'react-native-gesture-handler';
/*import api from '../../services/api';*/

export default function Login() {
    /*const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [infos, setInfos] = useState([]);*/

    const navigation = useNavigation();

    /*useEffect(() => {
        api.get('/')
        .then(response => {
            setInfos(response.data);
        })
    },[]);*/

    function navigateToCadastro() {
        navigation.navigate('Cadastro');
    };

    function handleLogin() {
        alert('Dados incluidos com sucesso');
    };

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Faça seu login para continuar</Text>
            </View>

            <View style={styles.inputs}>
                
                <TextInput
                    style={styles.inputText}
                    placeholder="Email"
                    autoCorrect={false}
                />

                <Text style={styles.inputTextHeader}></Text>
                <TextInput
                    style={styles.inputText} 
                    placeholder="Senha"
                    autoCorrect={false}
                    />
            </View>

            <View style={styles.botoes}>
                <TouchableOpacity 
                style={styles.botaoLogin} 
                onPress={handleLogin}>
                    <Text style={styles.botaoLoginText}>Entrar</Text>
                </TouchableOpacity>

            </View >

            <View style={styles.textosfinais}>
                <TouchableOpacity>
                    <Text style={styles.textoCadastrese}> Não possui conta? </Text>  
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.botaoCadastrar} 
                onPress={navigateToCadastro}>
                    <Text style={styles.botaoCadastrarText}>Cadastre-se</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}