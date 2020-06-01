import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Text, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
//Importando React, useState, ícones, useNavigation, useRoutes e componentes necessários do react native

import styles from './styles';
import api from '../../services/api';
//Importando os stylos do arquivo styles.js e api do arquivo api.js na pasta services

export default function Cadastro() {
    const route = useRoute();
    const navigation = useNavigation();

    const dadosAnt = route.params.dados;

    const [nome, setNome] = useState(dadosAnt.nome);
    const [sobrenome, setSobrenome] = useState(dadosAnt.sobrenome);
    const [apelido, setApelido] = useState(dadosAnt.apelido);
    const [numTelefone, setNumTelefone] = useState(dadosAnt.NumTelefone);
    const [ra, setRA] = useState(dadosAnt.ra);
    const [fumante, setFumante] = useState(dadosAnt.fumante);
    const [curso, setCurso] = useState(dadosAnt.curso);
    const [musica, setMusica] = useState(dadosAnt.musica);

    function navigateToInicio() {
        navigation.navigate('TelaInicial', {dadosAnt});
    }; //função que navega para a Tela Inicial

    async function salvarDados() {
    //função para salvar os dados modificados e lidar com cláusulas referentes aos dados modificados
        const info = ({
            email: dadosAnt.email,
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

            const dados = response.data[0];
    
            alert('Alterações feitas com sucesso');
    
            navigation.navigate('TelaInicial', {dados} );
        }
        catch(err){
            alert('Erro ao fazer alteração das informações!');
            };
    }

    return(
        <>
        <View style={styles.container}>
            <Feather name="arrow-left" size={24} color="#999" onPress={navigateToInicio} /> {/* Botão de voltar */}

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Perfil</Text>
                </View> {/* Texto do cabeçalho */}

                <View style={styles.user}>
                    <View style={styles.userFoto}></View>
                    <Text style={styles.userName}> {dadosAnt.email}</Text>
                </View> {/* Foto de perfil + nome do usuário */}
            
                {/* Caixas de texto para alteração de dados (Começo) */}
                <View style={styles.inputs}>

                    <Text>Nome:</Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder={dadosAnt.nome}
                        autoCorrect={false}
                        onChangeText={setNome}
                    />

                    <Text>Sobrenome:</Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder={dadosAnt.sobrenome}
                        autoCorrect={false}
                        onChangeText={setSobrenome}
                    />

                    <Text>Apelido:</Text>  
                    <TextInput
                        style={styles.inputText} 
                        placeholder={dadosAnt.apelido}
                        autoCorrect={false}
                        onChangeText={setApelido}
                        />
                        
                        <Text>Telefone:</Text>
                        <TextInput
                        style={styles.inputText} 
                        placeholder={dadosAnt.numTelefone}
                        autoCorrect={false}
                        onChangeText={setNumTelefone}  
                        autoCapitalize='none'
                        keyboardType="numeric"
                        />

                    <Text>RA:</Text>
                    <TextInput
                        style={styles.inputText} 
                        placeholder={dadosAnt.ra}
                        autoCorrect={false}
                        onChangeText={setRA}  
                        autoCapitalize='none'
                        keyboardType="numeric"
                        />

                    <Text>Fumante?:</Text>
                    <TextInput
                    style={styles.inputText} 
                    placeholder={dadosAnt.fumante}
                    autoCorrect={false}
                    onChangeText={setFumante}
                    />
                    
                    <Text>Curso:</Text>
                    <TextInput
                    style={styles.inputText} 
                    placeholder={dadosAnt.curso}
                    autoCorrect={false}
                    onChangeText={setCurso}  
                    autoCapitalize='words'
                    />

                    <Text>Musicas:</Text>
                    <TextInput
                    style={styles.inputText} 
                    placeholder={dadosAnt.musica}
                    autoCorrect={false}
                    onChangeText={setMusica}  
                    autoCapitalize='words'
                    />
                    {/* Caixas de texpo para alteração de dados (Final) */}
                </View>

                <View style={styles.botoes}>
                    <TouchableOpacity 
                    style={styles.botaoLogin} 
                    onPress={() => salvarDados()}>
                        <Text style={styles.botaoLoginText}>Salvar</Text>
                    </TouchableOpacity> {/* Botão "Salvar" para salvar dados modificados */}

                </View >
            </ScrollView>
        </View>
        </>
    )
}