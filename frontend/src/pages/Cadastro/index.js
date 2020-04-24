import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

import styles from './styles';
import api from '../../services/api';

export default function Cadastro() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [ra, setRA] = useState('');
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [numTelefone, setNumTelefone] = useState('');
    const [confirmacao, setConfirmacao] = useState('');

    const navigation = useNavigation();

    function navigateToLogin() {
        navigation.navigate('Login');
    };

    async function cadastrarUsuario() {
        
        const info = ({
            email,
            senha,
            ra,
            nome, 
            sobrenome,
            numTelefone,
        });

        if(confirmacao === senha){
            try{
                await api.post('/usuarios', info);
    
                alert('Conta criada com sucesso');
    
                navigation.navigate('Login');
            }
            catch(err){
                alert('Erro ao fazer cadastro!');
            };
        }

        else{
            alert("As senhas digitadas não são correspondentes");
        }
    };

    return(
        <View style={styles.container}>
            <Feather name="arrow-left" size={24} color="#999" onPress={navigateToLogin} />
            <View style={styles.header}>
                <Text style={styles.headerText}>Crie sua conta</Text>
            </View>

            
            <View style={styles.inputs}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.tosText}>
                    Ao cadastrar você admite  que está ciente e aceita os Termos e Condições de Serviço do FeGoApp
                    </Text>
                    <Text style={styles.inputTextHeader}></Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Nome"
                        autoCorrect={false}
                        onChange={e => setNome(e.target.value)}
                    />

                    <Text style={styles.inputTextHeader}></Text>
                    <TextInput
                        style={styles.inputText} 
                        placeholder="Sobrenome"
                        autoCorrect={false}
                        onChange={e => setSobrenome(e.target.value)}
                        />

                    <Text style={styles.inputTextHeader}></Text>
                    <TextInput
                        style={styles.inputText} 
                        placeholder="Email"
                        autoCorrect={false}
                        onChange={e => setEmail(e.target.value)}
                        />

                    <Text style={styles.inputTextHeader}></Text>
                    <TextInput
                        style={styles.inputText} 
                        placeholder="Numero de Telefone (somente numeros)"
                        autoCorrect={false}
                        keyboardType="numeric"
                        onChange={e => setNumTelefone(e.target.value)}
                        />

                    <Text style={styles.inputTextHeader}></Text>
                    <TextInput
                        style={styles.inputText} 
                        placeholder="RA"
                        autoCorrect={false}
                        keyboardType="numeric"
                        onChange={e => setRA(e.target.value)}
                        />
                    
                    <Text style={styles.inputTextHeader}></Text>
                    <TextInput
                        style={styles.inputText} 
                        placeholder="Senha"
                        autoCorrect={false}
                        onChange={e => setSenha(e.target.value)}
                        />

                    <Text style={styles.inputTextHeader}></Text>
                    <TextInput
                        style={styles.inputText} 
                        placeholder="Confirme sua senha"
                        autoCorrect={false}
                        onChange={e => setConfirmacao(e.target.value)}
                        />
                </ScrollView>
            </View>

            <View style={styles.botoes}>
                <TouchableOpacity 
                style={styles.botaoCadastrar} 
                onPress={cadastrarUsuario}>
                    <Text style={styles.botaoCadastrarText}>Concluir Cadastro</Text>
                </TouchableOpacity>
                
            </View>

            <View style={styles.textosfinais}>

                <Text style={styles.textoLogin}> Já possui conta?  </Text>

                <TouchableOpacity 
                style={styles.botaoLogin}
                onPress={navigateToLogin}>
                    <Text style={styles.botaoLoginText}>Login</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}