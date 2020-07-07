import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import { TextInput, FlatList } from 'react-native-gesture-handler';
import api from '../../services/api'; 

export default function detalheCaronas() { 
    const route = useRoute();
    const navigation = useNavigation();

    //const [infosMotorista, setInfosMotorista] = useState('');

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

    async function dadosDoMotorista() {
        //const response = await api.get(`/sessions/?email=${emailDaCarona}`);

        //setInfosMotorista(response.data);
    }

    useEffect(() => {
        dadosDoMotorista();
    }, []) 

    function botoesSolicitarCarona() {
        //if(vagasDisponiveis > 0){
            return (
                <>
                    <TouchableOpacity 
                    style={styles.botaoPedirCarona} 
                    onPress={() => solicitarCarona()}>
                        <Text style={styles.textPedirCarona}>Pedir Carona</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity 
                    style={styles.botaoEsperaCarona} 
                    onPress={() => colocarEmEspera()}>
                        <Text style={styles.textEsperaCarona}>Entrar na Lista de Espera</Text>
                    </TouchableOpacity> 
                </>
            );
        //}
        /*else{
            return (
                <TouchableOpacity 
                style={styles.botaoEsperaCarona} 
                onPress={() => alert("Colocar na lista de espera!")}>
                    <Text style={styles.textEsperaCarona}>Pedir Carona</Text>
                </TouchableOpacity> 
            );
        }*/
    }

    async function solicitarCarona() {
        //enviar mensagem ao motorista, solicitando
        alert("Colocar na carona")
    }

    async function colocarEmEspera() {
        alert("Colocar em Espera")
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
                                <Text style={styles.CaronasTextMid}> dia/mes/ano </Text>
                                <Text style={styles.CaronasText}> origem 
                                <Text style={styles.Linhas}>----------</Text>
                                destino </Text>
                                <Text style={styles.CaronasTextMid}> hora:minuto </Text>
                                <Text style={styles.CaronasTextPreco}> 50 reais  </Text>
                            </View>
                        </View>
                        
                        <Text style={styles.motoDescri} >Motorista:</Text>
                        <Text style={styles.text} > Nome Mt Sobrenome Mt (apelido) </Text>
                        <Text style={styles.description}> Fumante: sim/nao </Text>
                        <Text style={styles.description}> Avaliação: 0.0/0.0 </Text>
                        <Text style={styles.description}> Curso: curso </Text>
                        <Text style={styles.description}> Musicas: musica </Text>


                        <Text style={styles.passaDescri}>Passageiro(s):</Text>
                    </>
                }
                data = {[1,2,3]}
                keyExtractor={pessoa => String(pessoa)}
                showsVerticalScrollIndicator = {false}
                renderItem = {({item: pessoa})=>(
                    <View style={{marginBottom: 20}}>
                        <Text style={styles.text}> Nome Sobrenome (apelido) </Text>
                        <Text style={styles.description}> Curso: Curso </Text>
                        <Text style={styles.description}> Avaliação: 0.0/0.0 </Text>
                    </View>
                )}
                ListFooterComponent={
                    botoesSolicitarCarona()
                }
                />
        </View>
    )
}