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
    const [origem, setOrigem] = useState('');
    const [destino, setDestino] = useState('');

    const dados = route.params.dados;

    function detalheCarona (infosCarona) {
        navigation.navigate('DetalheCarona', {dados, infosCarona});
    };

    async function loadCaronas() {
        const response = await api.get('/caronas');

        setCaronas(response.data);
    }

    async function buscarCaronas() {
        try{
            await api.get(`/caronas/filtros/?origem=${origem}&destino=${destino}`)
            .then(response => {
                setCaronas(response.data);
            })
        }
        catch(err){
            alert('Erro ao pesquisar caronas!');
        };
    }

    useEffect(() => {
        loadCaronas();
    }, []) 
    
    return(
        <View style={styles.container}>
                <Feather name="arrow-left" size={30} color="#858585" onPress = {navigation.goBack}/>
            <View style={styles.header}></View>

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
                <Feather name="search" size={40} onPress={buscarCaronas} />
            </View>
            </KeyboardAvoidingView>
            
            <FlatList style={styles.CaronasList}
            data = {caronas}
            keyExtractor={carona => String(carona.id)}
            showsVerticalScrollIndicator = {false}
            renderItem = {({item: carona})=>(
                <TouchableOpacity style={styles.Caronas}
                onPress={() => detalheCarona(carona)}>
                <View style={styles.userFoto}></View>
                <View style={styles.CaronasInfo}>
                <Text style={styles.CaronasText}> {carona.origem} {'->'} {carona.destino} </Text>
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