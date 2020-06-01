import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import { TextInput, FlatList } from 'react-native-gesture-handler';
import api from '../../services/api'; 

export default function Caronas() { 
    const route = useRoute();
    const navigation = useNavigation();

    const [caronas, setCaronas] = useState([]);

    const dados = route.params.dados;

    function navigateToTelaInicial() {
        navigation.navigate('TelaInicial', {dados});
    };

    function detalheCarona () {
        alert('Tela ainda não existe!');
    };

    async function loadCaronas() {
        const response = await api.get('/caronas');

        setCaronas = response.data;
    }

    useEffect(() => {
        loadCaronas();
    }, [])

    //flatlist com o codigo certo de dados (nao temos, entao mantive como comentario)

    /* <FlatList style={styles.CaronasList}
            data = {caronas}
            keyExtractor={carona => String(carona.id)}
            showsVerticalScrollIndicator = {false}
            renderItem = {({item: carona})=>(
                <TouchableOpacity style={styles.Caronas}
                onPress={() => detalheCarona()}>
                <View style={styles.userFoto}></View>
                <View style={styles.CaronasInfo}>
                <Text style={styles.CaronasText}> De: {carona.origem} </Text>
                <Text style={styles.CaronasText}> Para: {carona.destino}  </Text>
                <Text style={styles.CaronasText}> Horário: {carona.hora}:{carona.minuto} </Text>
                <Text style={styles.CaronasText}> Data: {carona.dia}/{carona.mes}/{carona.ano} </Text>
                </View>
                </TouchableOpacity>
            )}
            /> */ 
    
    return(
        <View style={styles.container}>
                <Feather name="arrow-left" size={24} color="#858585" onPress = {navigateToTelaInicial}/>
            <View style={styles.header}>
                <Text style={styles.headerText}>Caronas</Text>
            </View>
            
            <FlatList style={styles.CaronasList}
            data = {[1,2,3,4,5,6,7,8]}
            keyExtractor={carona => String(carona)}
            showsVerticalScrollIndicator = {false}
            renderItem = {()=>(
                <TouchableOpacity style={styles.Caronas}>
                <View style={styles.userFoto}></View>
                <View style={styles.CaronasInfo}>
                <Text style={styles.CaronasText}> De: Pinda </Text>
                <Text style={styles.CaronasText}> Para São Paulo  </Text>
                <Text style={styles.CaronasText}> Horário: 00:00 </Text>
                </View>
                </TouchableOpacity>
            )}
            />
        </View>
    )
}