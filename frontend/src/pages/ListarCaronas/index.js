import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Text, TouchableOpacity, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TextInput, FlatList } from 'react-native-gesture-handler';

import styles from './styles';
import api from '../../services/api'; 

export default function Caronas() { 
    const route = useRoute();
    const navigation = useNavigation();

    const [caronas, setCaronas] = useState([]);
    const [caronasFiltradas, setCaronasFiltradas] = useState([]);
    const [origem, setOrigem] = useState('');
    const [destino, setDestino] = useState('');

    const dados = route.params.dados;

    function detalheCarona (infosCarona) {
        navigation.navigate('DetalheCarona', {dados, infosCarona});
    };

    async function loadCaronas() {
        const response = await api.get('/caronas');

        let vetorDeCaronas = [];
        let horarioMilissegundos = new  Date().valueOf();
        response.data.map( carona => {
            if(carona.dataMilissegundos > horarioMilissegundos){
                vetorDeCaronas.push(carona);
            }
        })
        setCaronas(vetorDeCaronas);
        setCaronasFiltradas(vetorDeCaronas);
    }

    async function buscarCaronas() {
        let vetorDeCaronas = [];

        vetorDeCaronas = caronas.filter( carona => {
            return carona.origem.indexOf(origem) > -1;
        })

        vetorDeCaronas = vetorDeCaronas.filter( carona => {
            return carona.destino.indexOf(destino) > -1;
        })

        setCaronasFiltradas(vetorDeCaronas);
    }

    useEffect(() => {
        loadCaronas();
    }, []) 
    
    return(
        <View style={styles.container}>
            <Feather name="arrow-left" size={30} style={{marginBottom: 10}} color="#858585" onPress = {navigation.goBack}/>

            <KeyboardAvoidingView behavior="padding" style={styles.buscar}>
            <View style={{flexDirection: 'row'}}>
                <TextInput
                    style={styles.inputText}
                    placeholder={`Origem`}
                    autoCorrect={false}
                    onChangeText={setOrigem}
                />
                <TextInput
                    style={styles.inputText}
                    placeholder={`Destino`}
                    autoCorrect={false}
                    onChangeText={setDestino}
                />
                <Feather name="search" size={30} style={styles.buscar} onPress={buscarCaronas} />
            </View>
            </KeyboardAvoidingView>
            
            <FlatList style={styles.CaronasList}
            data = {caronasFiltradas}
            keyExtractor={carona => String(carona.id)}
            showsVerticalScrollIndicator = {false}
            renderItem = {({item: carona})=>(
                <TouchableOpacity style={styles.Caronas}
                onPress={() => detalheCarona(carona)}>
                <View style={styles.motoristaInfo}>
                    <View style={styles.motoristaFoto}></View>
                    <Text style={styles.motoristaNome}>{(dados.nome) ? dados.nome : null}</Text>
                </View>
                <View style={styles.CaronasInfo}>
                    <Text style={styles.CaronasText}>{carona.origem} {(carona.encontro) ? `(${carona.encontro})`:null}</Text>
                    <Feather style={{alignSelf: 'center'}} name="arrow-down" size={20} color="#fff"/>
                    <Text style={styles.CaronasText}>{carona.destino.split(",")[0]} </Text>
                    <Text style={styles.CaronasText}> Horário: {carona.hora}:{carona.minuto} </Text>
                    <Text style={styles.CaronasText}> Data: {carona.dia}/{carona.mes} </Text>
                    <Text style={styles.CaronasTextPreco}> R${carona.preco} </Text>
                </View>
                </TouchableOpacity>
            )}
            />
        </View>
    )
}

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        backgroundColor: '#fff',
        borderColor: '#347EBF',
        borderWidth: 2,
        borderRadius: 10,  
        height: 50,
        width: 200,
        padding: 10,
    },
    inputAndroid: {
        backgroundColor: '#fff',
        borderColor: '#347EBF',
        borderWidth: 2,
        borderRadius: 10,  
        height: 50,
        width: 100,
        padding: 10,
    },
  });