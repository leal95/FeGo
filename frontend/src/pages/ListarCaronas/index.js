import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Text, TouchableOpacity, KeyboardAvoidingView, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Feather } from '@expo/vector-icons';
import { TextInput, FlatList } from 'react-native-gesture-handler';

import styles from './styles';
import api from '../../services/api'; 

export default function Caronas() { 
    const route = useRoute();
    const navigation = useNavigation();

    const [caronas, setCaronas] = useState([]);
    const [parametroPesquisa, setParametroPesquisa] = useState('');
    const [valuePesquisa, setValuePesquisa] = useState('');

    const dados = route.params.dados;

    function navigateToTelaInicial() {
        navigation.navigate('TelaInicial', {dados});
    };

    function detalheCarona (infosCarona) {
        navigation.navigate('DetalheCarona', {dados, infosCarona});
    };

    async function loadCaronas() {
        const response = await api.get('/caronas');

        setCaronas(response.data);
    }

    async function buscarCaronas() {
        if(parametroPesquisa === "origem"){
            await api.get(`/caronas/filtros/?origem=${valuePesquisa}`)
            .then(response => {
                setCaronas(response.data);
            })
        }
        if(parametroPesquisa === "destino"){
            await api.get(`/caronas/filtros/?destino=${valuePesquisa}`)
            .then(response => {
                setCaronas(response.data);
            })
        }
        if(!parametroPesquisa || !valuePesquisa){
            alert("Pesquisa Inválida, favor informar parametro e valor da pesquisa")
        }
    }

    useEffect(() => {
        loadCaronas();
    }, []) 
    
    return(
        <View style={styles.container}>
                <Feather name="arrow-left" size={30} color="#858585" onPress = {navigateToTelaInicial}/>
            <View style={styles.header}></View>

            <KeyboardAvoidingView behavior="padding" style={styles.buscar}>
            <View style={{flexDirection: 'row'}}>
                <RNPickerSelect
                    style={pickerSelectStyles}
                    placeholder={{label: 'Buscar por:', value: null}}
                    onValueChange={(value) => setParametroPesquisa(value)}
                    items={[
                        { label: 'Cidade de Origem', value: 'origem' },
                        { label: 'Cidade de Destino', value: 'destino' },
                        { label: 'Horario', value: 'horario' },
                    ]}
                />
                <Feather name="search" size={40} onPress={buscarCaronas} />
            </View>
            <TextInput
                style={styles.inputText}
                placeholder={`Insira aqui o/a ${parametroPesquisa}`}
                autoCorrect={false}
                onChangeText={setValuePesquisa}
            />
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
                <Text style={styles.CaronasText}> Data: {carona.dia}/{carona.mes}/{carona.ano} </Text>
                <Text style={styles.CaronasTextPreco}> 50 reais  </Text>
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