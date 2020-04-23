import React/*, { useState }*/ from 'react';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

import styles from './styles';
/*import api from '../../services/api';*/

export default function Cadastro() {

    const navigation = useNavigation();

    function navigateToLogin() {
        navigation.navigate('Login');
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
                    />

                    <Text style={styles.inputTextHeader}></Text>
                    <TextInput
                        style={styles.inputText} 
                        placeholder="Sobrenome"
                        autoCorrect={false}
                        />

                    <Text style={styles.inputTextHeader}></Text>
                    <TextInput
                        style={styles.inputText} 
                        placeholder="Email"
                        autoCorrect={false}
                        />

                    <Text style={styles.inputTextHeader}></Text>
                    <TextInput
                        style={styles.inputText} 
                        placeholder="Numero de Telefone (somente numeros)"
                        autoCorrect={false}
                        keyboardType="numeric"
                        />

                    <Text style={styles.inputTextHeader}></Text>
                    <TextInput
                        style={styles.inputText} 
                        placeholder="RA"
                        autoCorrect={false}
                        keyboardType="numeric"
                        />
                    
                    <Text style={styles.inputTextHeader}></Text>
                    <TextInput
                        style={styles.inputText} 
                        placeholder="Senha"
                        autoCorrect={false}
                        />

                    <Text style={styles.inputTextHeader}></Text>
                    <TextInput
                        style={styles.inputText} 
                        placeholder="Confirme sua senha"
                        autoCorrect={false}
                        />
                </ScrollView>
            </View>

            <View style={styles.botoes}>
                <TouchableOpacity 
                style={styles.botaoCadastrar}>
                    <Text style={styles.botaoCadastrarText}>Concluir Cadastro</Text>
                </TouchableOpacity>
                
            </View>

            <View style={styles.textosfinais}>

                <Text style={styles.textoLogin}> Já possui conta?  </Text>

                <TouchableOpacity 
                style={styles.botaoLogin}>
                    <Text style={styles.botaoLoginText}>Login</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}