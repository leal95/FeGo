import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import { FlatList } from 'react-native-gesture-handler';
import api from '../../services/api'; 

export default function detalheCaronas() { 
    const route = useRoute();
    const navigation = useNavigation();

    const [infosMotorista, setInfosMotorista] = useState('');

    const [infosPassageiros, setInfosPassageiros] = useState([]);

    let dados = {};

    if(route.params.dados){
        dados = route.params.dados;
    }
    else{
        if(route.params.dadosAnt){
            dados = route.params.dadosAnt;
        }
    }

    const infosCarona = route.params.infosCarona;

    async function getDadosDoMotorista() {
        const response = await api.get(`/sessions/?email=${infosCarona.email}`);

        setInfosMotorista(response.data);
    }

    async function getDadosDosPassageiros() {
        if(infosCarona.passageiros){
            const emailPassageiros = infosCarona.passageiros.split(",");
        
            if(emailPassageiros){
                for(var i = 0; i<emailPassageiros.length;i++){
                    const response = await api.get(`/sessions/?email=${emailPassageiros[i]}`);

                    console.log(response.data[0]);
                }
            }
        }
        else return
    }

    useEffect(() => {
        getDadosDoMotorista();
        getDadosDosPassageiros();
    }, []) 

    function botoesSolicitarCarona() {
        if(infosCarona.vagas > 0){
            return (
                <>
                    <TouchableOpacity 
                    style={styles.botaoPedirCarona} 
                    onPress={() => solicitarCarona()}>
                        <Text style={styles.textPedirCarona}>Pedir Carona</Text>
                    </TouchableOpacity> 
                </>
            );
        }
        else{
            return (
                <TouchableOpacity 
                style={styles.botaoEsperaCarona} 
                onPress={() => colocarEmEspera()}>
                    <Text style={styles.textEsperaCarona}>Aguardar Vaga</Text>
                </TouchableOpacity> 
            );
        }
    }

    async function solicitarCarona() {
        //enviar mensagem ao motorista, solicitando
        console.log(infosPassageiros)
        //console.log('aaaaaaaaaaaaaaaaaa')
    }

    async function colocarEmEspera() {
        alert("Colocar em Espera")
    }

    function mostrarMotorista() {
        if(infosMotorista){
            return(
                <>
                    <Text style={styles.motoDescri} >Motorista:</Text>
                    <Text style={styles.text}> {infosMotorista[0].nome} {infosMotorista[0].sobrenome} ({infosMotorista[0].apelido}) </Text>
                    <Text style={styles.description}> Modelo do Carro: {infosMotorista[0].modeloCarro}</Text>
                    <Text style={styles.description}> Placa do Carro: {infosMotorista[0].placaCarro}</Text>
                    <Text style={styles.description}> Fumante: {infosMotorista[0].fumante} </Text>
                    <Text style={styles.description}> Curso: {infosMotorista[0].curso} </Text>
                    <Text style={styles.description}> Musicas: {infosMotorista[0].musica} </Text>
                </>
            )
        }
        else{
            return
        }
    }

    function mostrarPassageiro(passageiro){
        return(
            <>
                <View style={{marginBottom: 20}}>
                        <Text style={styles.text}> Nome Sobrenome (apelido) </Text>
                        <Text style={styles.description}> Curso: Curso </Text>
                        <Text style={styles.description}> Musica: Musica </Text>
                    </View>
            </>
        )
    }
    
    return(
        <View style={styles.container}>
            <Feather name="arrow-left" size={30} color="#858585" onPress = {navigation.goBack}/>
            <View style={styles.header}></View>

            <FlatList style={styles.passaDescri}
                ListHeaderComponent={
                    <>
                        <View style={styles.Caronas} >
                            <View style={styles.CaronasInfo}>
                                <Text style={styles.CaronasTextMid}> {infosCarona.dia} / {infosCarona.mes} / {infosCarona.ano} </Text>
                                <Text style={styles.CaronasText}> {infosCarona.origem}
                                <Text style={styles.Linhas}> {'-->'} </Text>
                                {infosCarona.destino.split(",")[0]}</Text>
                                <Text style={styles.CaronasTextMid}> {infosCarona.hora}:{infosCarona.minuto} </Text>
                                <Text style={styles.CaronasTextPreco}> {infosCarona.preco} reais </Text>
                            </View>
                        </View>
                        
                        {mostrarMotorista()}


                        <Text style={styles.passaDescri}>Passageiro(s):</Text>
                    </>
                }
                data = {[1,2,3]}
                keyExtractor={pessoa => String(pessoa)}
                showsVerticalScrollIndicator = {false}
                renderItem = {({item: pessoa})=>(
                    mostrarPassageiro(pessoa)
                )}
                ListFooterComponent={
                    botoesSolicitarCarona()
                }
                />
        </View>
    )
}