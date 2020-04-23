import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import { TextInput } from 'react-native-gesture-handler';
import api from '../../services/api';

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [info, setInfo] = useState('');

    const navigation = useNavigation();

    function navigateToCadastro() {
        navigation.navigate('Cadastro');
    };

    async function handleLogin() {
        try{
            await api.get(`/?email=${email}`)
            .then(response => {
                setInfo(response.data);
            })
            
            if(info.senha === senha){
                alert("Conta encontrada com sucesso!");
                navigation.navigate('ProxPag');
            }
            else{
                alert("Email ou senha inválidos")
            }
        }
        catch(err){
            alert('Erro ao processar login!');
        };
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
                    onChange={e => setEmail(e.target.value)}
                />

                <Text style={styles.inputTextHeader}></Text>
                <TextInput
                    style={styles.inputText} 
                    placeholder="Senha"
                    autoCorrect={false}
                    onChange={e => setSenha(e.target.value)}
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