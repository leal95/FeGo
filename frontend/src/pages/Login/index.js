import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native'
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Image } from 'react-native';

import styles from './styles';
import { TextInput } from 'react-native-gesture-handler';
import api from '../../services/api';
//Importando estilos no arquivo styles.js, caixas de input de texto e api, do arquivo api.js na pasta services

export default function Login() {
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    const navigation = useNavigation();

    /*useEffect(() => {
        alert('Ao usar o aplicativo você concorda com os Termos de Serviço, você poderá ler a qualquer momento pela tela de Cadastro')
    }, [])*/

    function navigateToCadastro() {
        navigation.navigate('Cadastro');
    }; //função para navegar para a tela de Cadastro

    function navigateToTelaInicial() {
        const dados = {
            email: "fzpenha@gmail.com",
            senha: "banana",
            ra: "181323281",
            nome: "Fernando",
            sobrenome: "Penha",
            numTelefone: "12988259871",
            apelido: "Sequela",
            placaCarro: "bololo",
            modeloCarro: "bololocar"
          }
        navigation.navigate('TelaInicial', {dados});
    }; //função para navegar para a tela inicial, passando os dados do Sequela (para os testes)

    async function handleLogin() {  
    //função que lida com as cláusulas relacionadas com os dados necessários para Login
        try{
            await api.get(`/sessions/?email=${email}`)
            .then(response => {
                if(response.data[0].senha == senha){
                    alert("Conta encontrada com sucesso!");

                    const dados = response.data[0];
                    
                    navigation.navigate('TelaInicial', { dados });
                }
                else{
                    alert("Email ou senha inválidos")
                }
            })
        }
        catch(err){
            alert('Erro ao processar login!');
        };
    };

    return(
        <View style={styles.container}>
            <View>
                <Image style={{height: 100, width: 100, alignSelf: 'center'}}
                    source={require('../../../assets/FeGoIcon.png')} />
                <Text style={styles.headerText}>Faça seu login para continuar</Text>
            </View> 

            <KeyboardAvoidingView behavior="padding" style={styles.inputs}>
               
                <TextInput
                    style={styles.inputText}
                    placeholder="Email"
                    autoCorrect={false}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType='email-address'
                    autoCapitalize='none'
                />

                <Text style={styles.inputTextHeader}></Text>
                <TextInput
                    style={styles.inputText} 
                    placeholder="Senha"
                    autoCorrect={false}
                    onChangeText={setSenha}  
                    secureTextEntry
                    autoCapitalize='none'
                    />
            </KeyboardAvoidingView>

            <View style={styles.botoes}> 
                <TouchableOpacity 
                style={styles.botaoLogin} 
                onPress={() => handleLogin()}>
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
                <TouchableOpacity 
                style = {{alignSelf: "center"}}
                onPress={navigateToTelaInicial}>
                    <Text style={styles.botaoCadastrarText}>IR PARA TELA INICIAL</Text>
                </TouchableOpacity> 
            
        </View>
    )
}