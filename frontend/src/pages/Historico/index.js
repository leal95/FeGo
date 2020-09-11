import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Text, TouchableOpacity, Image} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';

import styles from './styles';
import api from '../../services/api'; 

export default function Caronas() { 
    const route = useRoute();
    const navigation = useNavigation();

    const [caronas, setCaronas] = useState([]);

    const dados = route.params.dados;

    function detalheCarona (infosCarona) {
        let paginaAnterior = "historico"
        navigation.navigate('DetalheCarona', {dados, infosCarona, paginaAnterior});
    };

    async function loadCaronas() {
        const response = await api.get('/historico');

        let vetorHistorico = [];

        if(response.data){
            response.data.map( carona => {
                if(carona.email == dados.email){
                    vetorHistorico.push(carona);
                }
                else{
                    if(carona.passageiros){
                        if(carona.passageiros.indexOf(dados.email) > -1){
                            vetorHistorico.push(carona);
                        }
                    }
                }
            })
        }

        setCaronas(vetorHistorico);
    }

    useEffect(() => {
        loadCaronas();
    }, []) 
    
    return(
        <View style={styles.container}>
            <Feather name="arrow-left" size={30} color="#858585" onPress = {navigation.goBack}/>
            <View style={styles.header}><Text style= {styles.headerText}>Histórico de Caronas</Text></View>
            <Text style={styles.description}>Clique na carona para avaliar as pessoas que viajaram contigo!</Text>
            
            <FlatList style={styles.CaronasList}
            data = {caronas}
            keyExtractor={carona => String(carona.id)}
            showsVerticalScrollIndicator = {false}
            renderItem = {({item: carona})=>(
                <>
                    <TouchableOpacity style={styles.Caronas}
                    onPress={() => detalheCarona(carona)}>
                    <Image style={styles.userFoto}
                    source={('../../../tmp/uploads/Carica.png') ? 
                    require('../../../tmp/uploads/Carica.png') : null} />
                    <View>
                    <Text style={styles.CaronasText}> {carona.origem} {'->'} {carona.destino.split(",")[0]} </Text>
                    <Text style={styles.CaronasText}> Horário: {carona.hora}:{carona.minuto} </Text>
                    <Text style={styles.CaronasText}> Data: {carona.dia}/{carona.mes} </Text>
                    <Text style={styles.CaronasTextPreco}> R${carona.preco} </Text>
                    </View>
                    </TouchableOpacity>
                </>
            )}
            />
        </View>
    )
}