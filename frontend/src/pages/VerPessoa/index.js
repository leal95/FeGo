import React from 'react';
import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Image, Text, ScrollView } from 'react-native';

import styles from './styles';

export default function Cadastro() {
    const route = useRoute();
    const navigation = useNavigation();

    const dados = route.params.dados;

    return(
        <>
        <View style={styles.container}>
            <Feather name="arrow-left" size={30} color="#999" onPress={navigation.goBack} /> 

            <ScrollView style={styles.inputs} showsVerticalScrollIndicator={false}>
                <View style={styles.user}>
                    <Image style={styles.userFoto} 
                        source={('../../../tmp/uploads/Carica.png') ? 
                        require('../../../tmp/uploads/Carica.png') : null} />
                    <Text style={styles.userName}> {dados.nome} {dados.sobrenome} </Text>
                    <Text style={styles.userEmail}> {dados.email} </Text>

                    <Text style={{fontWeight: 'bold', fontSize: 16}}>{`Avaliacao:`}</Text>

                    <Text style={{fontWeight: 'bold', fontSize: 16}}>
                        {(dados.notaDaAvaliacao) ? 
                        `${dados.notaDaAvaliacao} / 5`: 
                        "Prezado 0.0"} 
                    </Text>
                </View>
                    
                    <Text style={{marginLeft: 10}}>Nome:</Text>
                    <Text>{(dados.nome) ? dados.nome : null}</Text>

                    <Text style={{marginLeft: 10}}>Sobrenome:</Text>
                    <Text>{(dados.sobrenome) ? dados.sobrenome : null}</Text>

                    <Text style={{marginLeft: 10}}>Apelido:</Text>  
                    <Text>{(dados.apelido) ? dados.apelido : null}</Text>
                        
                    <Text style={{marginLeft: 10}}>Telefone:</Text>
                    <Text>{(dados.telefone) ? dados.telefone : null}</Text>

                    <Text style={{marginLeft: 10}}>Placa do Carro:</Text>  
                    <Text>{(dados.placaCarro) ? dados.placaCarro : null}</Text>

                    <Text style={{marginLeft: 10}}>Modelo do Carro:</Text>  
                    <Text>{(dados.modeloCarro) ? dados.modeloCarro : null}</Text>

                    <Text style={{marginLeft: 10}}>Cor do Carro:</Text>  
                    <Text>{(dados.corCarro) ? dados.corCarro : null}</Text>

                    <Text style={{marginLeft: 10}}>RA:</Text>
                    <Text>{(dados.ra) ? dados.ra : null}</Text>

                    <Text style={{marginLeft: 10}}>Permite fumar no carro?:</Text>
                    <Text>{(dados.fumante) ? dados.fumante : null}</Text>
                    
                    <Text style={{marginLeft: 10}}>Curso:</Text>
                    <Text>{(dados.curso) ? dados.curso : null}</Text>

                    <Text style={{marginLeft: 10}}>Musicas:</Text>
                    <Text>{(dados.musica) ? dados.musica : null}</Text>
            </ScrollView>
        </View>
        </>
    )
}