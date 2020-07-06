import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Text, TouchableOpacity, KeyboardAvoidingView, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { TextInput, FlatList } from 'react-native-gesture-handler';
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
    const [modeloCarro, setModeloCarro] = useState(dadosAnt.modeloCarro);
    const [placaCarro, setPlacaCarro] = useState(dadosAnt.placaCarro);
    const [caronas, setCaronas] = useState([]);

    useEffect(() => {
        api.get(`/caronas/filtros/?usuario_email=${dadosAnt.email}`)
        .then(response => {
            setCaronas(response.data);
        })
    }, []) 

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
            placaCarro,
            modeloCarro,
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
            <Feather name="arrow-left" size={30} color="#999" onPress={navigation.goBack} /> 

            <FlatList
                ListHeaderComponent={
                    <>
                        <KeyboardAvoidingView behavior="padding">

                        <View style={styles.user}>
                            <View style={styles.userFoto}></View>
                            <Text style={styles.userName}> {dadosAnt.nome} {dadosAnt.sobrenome} </Text>
                            <Text style={styles.userEmail}> {dadosAnt.email} </Text>
                        </View>
                        <TouchableOpacity 
                        style={styles.botaoMensagens} 
                        onPress={() => navigation.navigate('Mensagens', {dadosAnt})}>
                            <Text style={styles.botaoLoginText}>Mensagens</Text>
                        </TouchableOpacity> 
                            
                            <Text style={{marginLeft: 10}}>Nome:</Text>
                            <TextInput
                                style={styles.inputText}
                                placeholder={dadosAnt.nome}
                                autoCorrect={false}
                                onChangeText={setNome}
                            />

                            <Text style={{marginLeft: 10}}>Sobrenome:</Text>
                            <TextInput
                                style={styles.inputText}
                                placeholder={dadosAnt.sobrenome}
                                autoCorrect={false}
                                onChangeText={setSobrenome}
                            />

                            <Text style={{marginLeft: 10}}>Apelido:</Text>  
                            <TextInput
                                style={styles.inputText} 
                                placeholder={dadosAnt.apelido}
                                autoCorrect={false}
                                onChangeText={setApelido}
                                />
                                
                            <Text style={{marginLeft: 10}}>Telefone:</Text>
                            <TextInput
                            style={styles.inputText} 
                            placeholder={dadosAnt.numTelefone}
                            autoCorrect={false}
                            onChangeText={setNumTelefone}  
                            autoCapitalize='none'
                            keyboardType="numeric"
                            />

                            <Text style={{marginLeft: 10}}>Placa do Carro:</Text>  
                            <TextInput
                                style={styles.inputText} 
                                placeholder={dadosAnt.placaCarro}
                                autoCorrect={false}
                                onChangeText={setPlacaCarro}
                                />

                            <Text style={{marginLeft: 10}}>Modelo do Carro:</Text>  
                            <TextInput
                                style={styles.inputText} 
                                placeholder={dadosAnt.modeloCarro}
                                autoCorrect={false}
                                onChangeText={setModeloCarro}
                                />

                            <Text style={{marginLeft: 10}}>RA:</Text>
                            <TextInput
                                style={styles.inputText} 
                                placeholder={dadosAnt.ra}
                                autoCorrect={false}
                                onChangeText={setRA}  
                                autoCapitalize='none'
                                keyboardType="numeric"
                                />

                            <Text style={{marginLeft: 10}}>Fumante:</Text>
                            <RNPickerSelect
                                style={pickerSelectStyles}
                                placeholder={dadosAnt.fumante? {label: dadosAnt.fumante, value: dadosAnt.fumante} : {label: 'Fumante?', value: null}}
                                onValueChange={(value) => setFumante(value)}
                                items={[
                                    { label: 'Sim', value: 'Sim' },
                                    { label: 'Nao', value: 'Nao' },
                                ]}
                            />
                            
                            <Text style={{marginLeft: 10}}>Curso:</Text>
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

                            <Text style={{marginLeft: 10}}>Musicas:</Text>
                            <TextInput
                                style={styles.inputText} 
                                placeholder={dadosAnt.musica}
                                autoCorrect={false}
                                onChangeText={setMusica}
                                /> 

                            <TouchableOpacity 
                            style={styles.botaoLogin} 
                            onPress={() => salvarDados()}>
                                <Text style={styles.botaoLoginText}>Salvar</Text>
                            </TouchableOpacity>
                    </KeyboardAvoidingView>
                    </>
                }
                data = {caronas}
                keyExtractor={carona => String(carona)}
                showsVerticalScrollIndicator = {false}
                renderItem = {({item: carona})=>(
                    <TouchableOpacity style={styles.Caronas}
                    onPress={() => navigation.navigate('DetalheCarona', {dadosAnt, carona})}>
                    <View style={styles.CaronasInfo}>
                        <Text style={styles.CaronasText}> {carona.origem} {'->'} {carona.destino} </Text>
                        <Text style={styles.CaronasText}> R${carona.preco} </Text>
                    </View>
                    <View style={styles.CaronasInfo}>
                        <Text style={styles.CaronasText}> Data: {carona.dia}/{carona.mes} </Text>
                        <Text style={styles.CaronasText}> Horário: {carona.hora}:{carona.minuto} </Text>
                    </View>
                    </TouchableOpacity>
                )}
                />
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
        marginLeft: 5,
    },
    inputAndroid: {
        backgroundColor: '#fff',
        borderColor: '#347EBF',
        borderWidth: 2,
        borderRadius: 10,  
        height: 50,
        width: 300,
        padding: 10,
        marginLeft: 5,
    },
  });