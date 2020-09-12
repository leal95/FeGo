import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Image, Text, TouchableOpacity, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';
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
    const [horarioInicial, setHorarioInicial] = useState('');
    const [horarioFinal, setHorarioFinal] = useState('');
    const [preco, setPreco] = useState('');
    const [dia, setDia] = useState('');
    const [filtrosVisivel, setFiltrosVisivel] = useState(true);

    const dados = route.params.dados;

    function detalheCarona (infosCarona) {
        navigation.navigate('DetalheCarona', {dados, infosCarona});
    };

    function showHideFiltros(){
        if(filtrosVisivel){
            setFiltrosVisivel(false)
        }
        else{
            setFiltrosVisivel(true);
        }
    }

    async function loadCaronas() {
        const response = await api.get('/caronas');

        let vetorDeCaronas = [];
        let caronaCriada = [];
        let horarioMilissegundos = new  Date().valueOf();
        response.data.map( async carona => {
            if(carona.dataMilissegundos > horarioMilissegundos){
                vetorDeCaronas.push(carona);
                if(carona.email == dados.email){
                    caronaCriada.push(carona);
                }
                else{
                    if(carona.passageiros){
                        if(carona.passageiros.indexOf(dados.email) > -1){
                            caronaCriada.push(carona);
                        }
                    }
                }
            }
            else{
                await api.post('/historico', carona);
                await api.delete(`/caronas/${carona.id}`)
            }
        })

        vetorDeCaronas.sort((a,b) => {
            return b.avaliacao - a.avaliacao;
        })

        if(caronaCriada){
            setCaronas(caronaCriada);
            setCaronasFiltradas(caronaCriada);
        }
        else{
            setCaronas(vetorDeCaronas);
            setCaronasFiltradas(vetorDeCaronas);
        }
    }

    async function buscarCaronas() {
        let vetorDeCaronas = [];

        console.log("hi")

        if(origem) {
        vetorDeCaronas = caronas.filter( carona => {
            return carona.origem.indexOf(origem) > -1;
        })
        }

        if(destino) {
        vetorDeCaronas = vetorDeCaronas.filter( carona => {
            return carona.destino.indexOf(destino) > -1;
        })
        }

        if(dia) {
        vetorDeCaronas = vetorDeCaronas.filter( carona => {
            return carona.dia == dia;
        })
        }

        if(preco) {
        vetorDeCaronas = vetorDeCaronas.filter( carona => {
            return carona.preco < preco;
        })
        }

        if(horarioInicial && horarioFinal) {
            vetorDeCaronas = vetorDeCaronas.filter( carona => {
                if(carona.hora.indexOf(0) == 0){
                    return carona.hora[1] > horarioInicial && carona.hora[1] < horarioFinal;
                }
                else{
                    return carona.hora > horarioInicial && carona.hora < horarioFinal;
                }
        })
        }

        if(vetorDeCaronas){
            vetorDeCaronas.sort((a,b) => {
                return b.avaliacao - a.avaliacao;
            })

            setCaronasFiltradas(vetorDeCaronas);
        }
    }

    useEffect(() => {
        loadCaronas();
    }, [])
    
    return(
        <View style={styles.container}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Feather name="arrow-left" style={{height: 30, width: 30}} size={30} color="#858585" onPress = {navigation.goBack}/>
                {(filtrosVisivel) ? 
                <AntDesign name="up" style={{height: 30, width: 30}} size={30} color="#347EBF" onPress = {() => showHideFiltros()} />
                :
                <AntDesign name="down" style={{height: 30, width: 30}} size={30} color="#347EBF" onPress = {() => showHideFiltros()} />}
            </View>

            {(filtrosVisivel) ? <KeyboardAvoidingView behavior="padding" style={styles.buscar}>
                <Text>Filtros de Cidade:</Text>
                <View style={{flexDirection: 'row', marginVertical: 5}}>
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
                </View>

                <Text>Filtros de Horario (Intervalo), Dia e Preço:</Text>
                <View style={{flexDirection: 'row', marginVertical: 5}}>
                    <TextInput
                        style={styles.inputText2}
                        placeholder={`Inicial`}
                        autoCorrect={false}
                        onChangeText={setHorarioInicial}
                        keyboardType='numeric'
                        returnKeyType="done"
                    />
                    <Text style={{justifyContent: 'center', alignSelf: 'center'}}>{'-'}</Text>
                    <TextInput
                        style={styles.inputText2}
                        placeholder={`Final`}
                        autoCorrect={false}
                        onChangeText={setHorarioFinal}
                        keyboardType='numeric'
                        returnKeyType="done"
                    />
                    <TextInput
                        style={styles.inputText2}
                        placeholder={`Dia`}
                        autoCorrect={false}
                        onChangeText={setDia}
                        keyboardType='numeric'
                        returnKeyType="done"
                    />
                    <TextInput
                        style={styles.inputText2}
                        placeholder={`Preco`}
                        autoCorrect={false}
                        onChangeText={setPreco}
                        keyboardType='numeric'
                        returnKeyType="done"
                    />
                    <Feather name="search" size={30} style={styles.buscarIcon} onPress={() => buscarCaronas()} />
                </View>
            </KeyboardAvoidingView>
            :
            null}
            
            <FlatList style={styles.CaronasList}
            data = {caronasFiltradas}
            keyExtractor={carona => String(carona.id)}
            showsVerticalScrollIndicator = {false}
            renderItem = {({item: carona})=>(
                <TouchableOpacity style={styles.Caronas}
                onPress={() => detalheCarona(carona)}>
                <View style={styles.motoristaInfo}>
                    <Image style={styles.userFoto}
                    source={('../../../tmp/uploads/Carica.png') ? 
                    require('../../../tmp/uploads/Carica.png') : null} />
                    <Text style={styles.motoristaNome}>{carona.nome}</Text>
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