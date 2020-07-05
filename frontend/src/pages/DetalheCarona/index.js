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

    //const [carona, setCarona] = useState([]);

    const dados = route.params.dados;
    const infosCarona = route.params.infosCarona;

    async function loadCaronas() {
        //const response = await api.get('/caronas');

        //setCarona(response.data);
    }

    function description() {
        if(dados.fumante === "Sim"){
            return (
                <View>
                    <Text style={styles.description}> Fumante </Text>
                    <Text style={styles.description}> Avaliação: 0.0/0.0 </Text>
                    <Text style={styles.description}> Curso: {dados.curso} </Text>
                    <Text style={styles.description}> Musicas: {dados.musica} </Text>
                </View>
            );
        }
        else{
            return (
                <View>
                    <Text style={styles.description}> Avaliação: 0.0/0.0 </Text>
                    <Text style={styles.description}> Curso: {dados.curso} </Text>
                    <Text style={styles.description}> Musicas: {dados.musica} </Text>
                </View>
            );
        }
    }

    useEffect(() => {
        loadCaronas();
    }, []) 

    /*<FlatList style={styles.passaDescri}
            data = {carona}
            keyExtractor={pessoa => String(pessoa.email)}
            showsVerticalScrollIndicator = {false}
            renderItem = {({item: pessoa})=>(
                <Text style={styles.text}> {pessoa.nome} {pessoa.sobrenome} ({pessoa.apelido}) </Text>
                <Text style={styles.text}> {pessoa.curso} </Text>
                <Text style={styles.text}> Avaliação: 0.0/0.0 </Text>
            )}
            />*/
    
    return(
        <View style={styles.container}>
            <Feather name="arrow-left" size={30} color="#858585" onPress = {navigation.goBack}/>
            <View style={styles.header}></View>
            
            <View style={styles.Caronas} >
                <View style={styles.CaronasInfo}>
                    <Text style={styles.CaronasTextMid}> {infosCarona.dia}/{infosCarona.mes}/{infosCarona.ano} </Text>
                    <Text style={styles.CaronasText}> {infosCarona.origem} 
                    <Text style={styles.Linhas}>----------</Text>
                    {infosCarona.destino} </Text>
                    <Text style={styles.CaronasTextMid}> {infosCarona.hora}:{infosCarona.minuto} </Text>
                    <Text style={styles.CaronasTextPreco}> 50 reais  </Text>
                </View>
            </View>
            
            <Text style={styles.motoDescri} >Motorista:</Text>
            <Text style={styles.text} > {dados.nome} {dados.sobrenome} ({dados.apelido}) </Text>
            {description()}

            {/*inserir flatlist*/}
            <Text style={styles.passaDescri}>Passageiro(s):</Text>
            <Text style={styles.description}> {dados.nome} {dados.sobrenome} ({dados.apelido}) </Text>
            <Text style={styles.description}> Curso: {dados.curso} </Text>
            <Text style={styles.description}> Avaliação: 0.0/0.0 </Text>
        </View>
    )
}