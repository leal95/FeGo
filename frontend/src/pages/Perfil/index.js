import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

import styles from './styles'

export default function Cadastro() {
    const route = useRoute();
    const navigation = useNavigation();

    const dados = route.params.dados;

    const [email, setEmail] = useState(dados.email);
    const [senha, setSenha] = useState(dados.);

    function navigateToInicio() {
        navigation.navigate('Tela Inicial', {dados});
    };

    function navigateToPage() {
        
    }

    return(
        <>
        <View style={styles.container}>
            <Feather name="arrow-left" size={24} color="#999" onPress={navigateToInicio} />
            <View style={styles.header}>
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
                    value={email}
                    onChangeText={setSenha}  
                    autoCapitalize='none'
                    />
            </KeyboardAvoidingView>

        </View>
        </>
    )
}