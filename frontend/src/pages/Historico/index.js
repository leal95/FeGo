import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import { TextInput, FlatList } from 'react-native-gesture-handler';
import api from '../../services/api'; 
 
export default function Historico () { 
    const route = useRoute();
    const navigation = useNavigation();

    const dados = route.params.dados;

    function navigateToTelaInicial() {
        navigation.navigate('TelaInicial', {dados});
    };
    
    return(
        <View style={styles.container}>
                <Feather name="arrow-left" size={24} color="#858585" onPress = {navigateToTelaInicial}/>
            <View style={styles.header}></View>
            
            <FlatList style={styles.CaronasList}
            data = {[1,2,3,4]}
            renderItem = { () => (
                <TouchableOpacity style={styles.Caronas}>
                <View style={styles.userFoto}></View>
                <View style={styles.CaronasInfo}>
                <Text style={styles.CaronasText}> Origem {'->'} Destino </Text>
                <Text style={styles.CaronasText}> Horário:  </Text>
                <Text style={styles.CaronasText}> Data: </Text>
                <Text style={styles.CaronasText}> Preço: </Text>
                </View>
                </TouchableOpacity>
                )}/>
        </View> 
    )
}