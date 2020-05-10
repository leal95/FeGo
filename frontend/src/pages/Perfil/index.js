import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Text, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import styles from './styles';
import api from '../../services/api';

export default function Cadastro() {
    const route = useRoute();
    const navigation = useNavigation();

    const dados = route.params.dados;

    const [nome, setNome] = useState(dados.nome);
    const [sobrenome, setSobrenome] = useState(dados.sobrenome);
    const [apelido, setApelido] = useState(dados.apelido);
    const [numTelefone, setNumTelefone] = useState(dados.NumTelefone);
    const [ra, setRA] = useState(dados.ra);
    const [fumante, setFumante] = useState(dados.fumante);
    const [curso, setCurso] = useState(dados.curso);
    const [musica, setMusica] = useState(dados.musica);

    function navigateToInicio() {
        navigation.navigate('TelaInicial', {dados});
    };

    async function salvarDados() {
        const info = ({
            email: dados.email,
            nome, 
            sobrenome,
            apelido,
            numTelefone,
            ra,
            fumante,
            curso,
            musica,
        });

        try{
            const response = await api.put('/profile', info);
    
            alert('Alterações feitas com sucesso');
    
            navigation.navigate('Tela Inicial', { response } );
        }
        catch(err){
            alert('Erro ao fazer alteração das informações!');
            };
    }

    return(
        <>
        <View style={styles.container}>
            <Feather name="arrow-left" size={24} color="#999" onPress={navigateToInicio} />
            <View style={styles.header}>
                <Text style={styles.headerText}>Perfil</Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.user}>
                    <View style={styles.userFoto}></View>
                    <Text style={styles.userName}> {dados.email}</Text>
                </View>

                <KeyboardAvoidingView behavior="padding" style={styles.inputs}>
                    
                    <Text>Nome:</Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder={dados.nome}
                        autoCorrect={false}
                        onChangeText={() => setNome()}
                    />

                    <Text>Sobrenome:</Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder={dados.sobrenome}
                        autoCorrect={false}
                        onChangeText={setSobrenome}
                    />

                    <Text>Apelido:</Text>  
                    <TextInput
                        style={styles.inputText} 
                        placeholder={dados.apelido}
                        autoCorrect={false}
                        onChangeText={setApelido}
                        />
                        
                        <Text>Telefone:</Text>
                        <TextInput
                        style={styles.inputText} 
                        placeholder={dados.numTelefone}
                        autoCorrect={false}
                        onChangeText={setNumTelefone}  
                        autoCapitalize='none'
                        keyboardType="numeric"
                        />

                    <Text>RA:</Text>
                    <TextInput
                        style={styles.inputText} 
                        placeholder={dados.ra}
                        autoCorrect={false}
                        onChangeText={setRA}  
                        autoCapitalize='none'
                        keyboardType="numeric"
                        />

                    <Text>Fumante?:</Text>
                    <TextInput
                    style={styles.inputText} 
                    placeholder={dados.fumante}
                    autoCorrect={false}
                    onChangeText={setFumante}
                    />
                    
                    <Text>Curso:</Text>
                    <TextInput
                    style={styles.inputText} 
                    placeholder={dados.curso}
                    autoCorrect={false}
                    onChangeText={setCurso}  
                    autoCapitalize='words'
                    />

                    <Text>Musicas:</Text>
                    <TextInput
                    style={styles.inputText} 
                    placeholder={dados.musica}
                    autoCorrect={false}
                    onChangeText={setMusica}  
                    autoCapitalize='words'
                    />
                </KeyboardAvoidingView>

                <View style={styles.botoes}>
                    <TouchableOpacity 
                    style={styles.botaoLogin} 
                    onPress={() => salvarDados()}>
                        <Text style={styles.botaoLoginText}>Salvar</Text>
                    </TouchableOpacity>

                </View >
            </ScrollView>
        </View>
        </>
    )
}