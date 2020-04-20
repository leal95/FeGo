import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';
import api from '../../services/api';

export default function Cadastro() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [ra, setRA] = useState('');

    const navigation = useNavigation();

    function navigateToLogin() {
        navigation.navigate('Login');
    };

    async function cadastrarUsuario() {
        
        const info = ({
            email,
            pass,
            ra
        });

        try{
            const response = await api.post('/', info);

            localStorage.setItem('id', response.data._id);

            alert('Sua conta foi criada com sucesso');

            navigation.navigate('Login');
        }
        catch(err){
            alert('Erro ao cadastrar usuário!');
        };
    };

    return(
        <View style={styles.container}>
            <Feather name="arrow-left" size={24} color="#999" onPress={navigateToLogin} />
            <View style={styles.header}>
                <Text style={styles.headerText}>Cadastre-se</Text>
            </View>

            <View style={styles.inputs}>
                <Text style={styles.inputTextHeader}>Email</Text>
                <TextInput
                    style={styles.inputText}
                    placeholder="Email"
                    autoCorrect={false}
                />

                <Text style={styles.inputTextHeader}>Senha</Text>
                <TextInput
                    style={styles.inputText} 
                    placeholder="Senha"
                    autoCorrect={false}
                    />

                <Text style={styles.inputTextHeader}>RA</Text>
                <TextInput
                    style={styles.inputText} 
                    placeholder="RA"
                    autoCorrect={false}
                    />

            </View>

            <View style={styles.tos}>
                <Text style={styles.tosText}>Você leu e aceita os Termos e Condições deste aplicativo?</Text>
            </View>

            <View style={styles.botoes}>
                <TouchableOpacity 
                style={styles.botaoCadastrar} 
                onPress={cadastrarUsuario}>
                    <Text style={styles.botaoCadastrarText}>Concluir Cadastro</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles.botaoLogin}
                onPress={navigateToLogin}>
                    <Text style={styles.botaoLoginText}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}