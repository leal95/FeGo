import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import { TextInput, FlatList } from 'react-native-gesture-handler';
import api from '../../services/api'; 

export default function Caronas() { 
    const route = useRoute();
    const navigation = useNavigation();

    const dados = route.params.dados;

    function navigateToTelaInicial() {
        navigation.navigate('TelaInicial', {dados});
    };

    
    return(
        <View style={styles.container}>
                <TouchableOpacity style={styles.botaoVoltar}>
                    <Feather name="arrow-left" size={24} color="#858585" onPress = {navigateToTelaInicial}/>
                </TouchableOpacity>
            <View style={styles.header}>
                <Text style={styles.headerText}>Caronas</Text>
            </View>

            <KeyboardAvoidingView behavior="padding" style={styles.Buscar}>
            <TouchableOpacity><Feather name="search" size={40}/></TouchableOpacity>
                <TextInput
                    style={styles.inputText}
                    placeholder="Buscar Carona"
                    autoCorrect={false}
                />
            </KeyboardAvoidingView>
            
            <FlatList style={styles.CaronasList}
            data = {[1,2,3,4,5,6,7,8]}
            keyExtractor={incident => String(incident)}
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