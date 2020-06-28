import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import { FlatList } from 'react-native-gesture-handler';
import api from '../../services/api'; 
 
export default function Historico () { 
    const route = useRoute();
    const navigation = useNavigation();

    const [caronas, setCaronas] = useState([]);

    const dados = route.params.dados;

    function navigateToTelaInicial() {
        navigation.navigate('TelaInicial', {dados});
    };

    function detalheCarona (infosCarona) {
        navigation.navigate('DetalheCarona', {dados, infosCarona});
    };

    useEffect(() => {
        api.get(`/caronas/filtros/?usuario_email=${dados.email}`)
        .then(response => {
            setCaronas(response.data);
        })
    }, []) 
    
    return(
        <View style={styles.container}>
                <Feather name="arrow-left" size={24} color="#858585" onPress = {navigateToTelaInicial}/>
            <View style={styles.header}></View>
            
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