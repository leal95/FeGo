import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Text, TouchableOpacity, KeyboardAvoidingView, ScrollView, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
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
    
            navigation.navigate('TelaInicial', {dados} );
        }
        catch(err){
            alert('Erro ao fazer alteração das informações!');
            };
    }

    return(
        <>
        <View style={styles.container}>
            <Feather name="arrow-left" size={30} color="#999" onPress={navigateToInicio} /> 

            <KeyboardAvoidingView behavior="padding" style={styles.inputs}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.user}>
                    <View style={styles.userFoto}></View>
                    <Text style={styles.userName}> {dadosAnt.nome} {dadosAnt.sobrenome} </Text>
                    <Text style={styles.userEmail}> {dadosAnt.email} </Text>
                </View>
                <View style={styles.botoes}>
                    <TouchableOpacity 
                    style={styles.botaoLogin} 
                    onPress={() => navigation.navigate('Historico', {dadosAnt})}>
                        <Text style={styles.botaoLoginText}>Histórico</Text>
                    </TouchableOpacity> 
                </View>
                    
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

                    <Text>Fumante:</Text>
                    <RNPickerSelect
                        style={pickerSelectStyles}
                        placeholder={dadosAnt.fumante? {label: dadosAnt.fumante, value: dadosAnt.fumante} : {label: 'Fumante?', value: null}}
                        onValueChange={(value) => setFumante(value)}
                        items={[
                            { label: 'Sim', value: 'Sim' },
                            { label: 'Nao', value: 'Nao' },
                        ]}
                    />
                    
                    <Text>Curso:</Text>
                    <RNPickerSelect
                        style={pickerSelectStyles}
                        placeholder={dadosAnt.curso? {label: dadosAnt.curso, value: dadosAnt.curso} : {label: 'Curso', value: null}}
                        onValueChange={(value) => setCurso(value)}
                        items={[
                            { label: 'Engenharia Civil', value: 'Engenharia Civil' },
                            { label: 'Engenharia Elétrica', value: 'Engenharia Elétrica' },
                            { label: 'Engenharia de Materiais', value: 'Engenharia de Materiais' },
                            { label: 'Engenharia de Produção', value: 'Engenharia de Produção' },
                            { label: 'Engenharia Mecânica', value: 'Engenharia Mecânica' },
                            { label: 'Física', value: 'Física' },
                            { label: 'Matemática', value: 'Matemática' },
                            { label: 'Pós-Graduação', value: 'Pós-Graduação' },
                        ]}
                    />

                    <Text>Musicas:</Text>
                    <TextInput
                        style={styles.inputText} 
                        placeholder={dadosAnt.musica}
                        autoCorrect={false}
                        onChangeText={setMusica}
                        />

                <View style={styles.botoes}>
                    <TouchableOpacity 
                    style={styles.botaoLogin} 
                    onPress={() => salvarDados()}>
                        <Text style={styles.botaoLoginText}>Salvar</Text>
                    </TouchableOpacity> 
                </View >
            </ScrollView>
            </KeyboardAvoidingView>
        </View>
        </>
    )
}

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        backgroundColor: '#fff',
        borderColor: '#347EBF',
        borderWidth: 2,
        borderRadius: 10,  
        height: 50,
        width: 300,
        padding: 10,
    },
    inputAndroid: {
        backgroundColor: '#fff',
        borderColor: '#347EBF',
        borderWidth: 2,
        borderRadius: 10,  
        height: 50,
        width: 300,
        padding: 10,
    },
  });