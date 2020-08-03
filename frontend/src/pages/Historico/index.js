import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Text, TouchableOpacity} from 'react-native';
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
        navigation.navigate('DetalheCarona', {dados, infosCarona});
    };

    async function loadCaronas() {
        const response = await api.get(`/caronas/filtros/?email=${dados.email}`)

        setCaronas(response.data);
    }

    useEffect(() => {
        loadCaronas();
    }, []) 
    
    return(
        <View style={styles.container}>
                <Feather name="arrow-left" size={30} color="#858585" onPress = {navigation.goBack}/>
            
            <FlatList style={styles.CaronasList}
            data = {caronas}
            keyExtractor={carona => String(carona.id)}
            showsVerticalScrollIndicator = {false}
            renderItem = {({item: carona})=>(
                <TouchableOpacity style={styles.Caronas}
                onPress={() => detalheCarona(carona)}>
                <View style={styles.userFoto}></View>
                <View style={styles.CaronasInfo}>
                <Text style={styles.CaronasText}> {carona.origem} {'->'} {carona.destino.split(",")[0]} </Text>
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