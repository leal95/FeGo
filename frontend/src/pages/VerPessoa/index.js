import React from 'react';
import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Image, Text, ScrollView } from 'react-native';

import styles from './styles';

export default function Cadastro() {
    const route = useRoute();
    const navigation = useNavigation();

    const terceiro = route.params.terceiro;

    return(
        <>
        <View style={styles.container}>
            <Feather name="arrow-left" size={30} color="#999" onPress={navigation.goBack} /> 

            <ScrollView style={styles.inputs} showsVerticalScrollIndicator={false}>
                <View style={styles.user}>
                    <Image style={styles.userFoto} 
                        source={('../../../tmp/uploads/Carica.png') ? 
                        require('../../../tmp/uploads/Carica.png') : null} />
                    <Text style={styles.userName}> {terceiro.nome} {terceiro.sobrenome} </Text>
                    <Text style={styles.userEmail}> {terceiro.email} </Text>

                    <Text style={{fontWeight: 'bold', fontSize: 16}}>{`Avaliacao:`}</Text>

                    <Text style={{fontWeight: 'bold', fontSize: 16}}>
                        {(terceiro.notaDaAvaliacao) ? 
                        `${terceiro.notaDaAvaliacao} / 5`: 
                        "Prezado 0.0"} 
                    </Text>
                </View>
                    
                    <Text style={{marginLeft: 10}}>Nome:</Text>
                    <Text>{(terceiro.nome) ? terceiro.nome : null}</Text>

                    <Text style={{marginLeft: 10}}>Sobrenome:</Text>
                    <Text>{(terceiro.sobrenome) ? terceiro.sobrenome : null}</Text>

                    <Text style={{marginLeft: 10}}>Apelido:</Text>  
                    <Text>{(terceiro.apelido) ? terceiro.apelido : null}</Text>
                        
                    <Text style={{marginLeft: 10}}>Telefone:</Text>
                    <Text>{(terceiro.telefone) ? terceiro.telefone : null}</Text>

                    <Text style={{marginLeft: 10}}>Placa do Carro:</Text>  
                    <Text>{(terceiro.placaCarro) ? terceiro.placaCarro : null}</Text>

                    <Text style={{marginLeft: 10}}>Modelo do Carro:</Text>  
                    <Text>{(terceiro.modeloCarro) ? terceiro.modeloCarro : null}</Text>

                    <Text style={{marginLeft: 10}}>Cor do Carro:</Text>  
                    <Text>{(terceiro.corCarro) ? terceiro.corCarro : null}</Text>

                    <Text style={{marginLeft: 10}}>RA:</Text>
                    <Text>{(terceiro.ra) ? terceiro.ra : null}</Text>

                    <Text style={{marginLeft: 10}}>Permite fumar no carro?:</Text>
                    <Text>{(terceiro.fumante) ? terceiro.fumante : null}</Text>
                    
                    <Text style={{marginLeft: 10}}>Curso:</Text>
                    <Text>{(terceiro.curso) ? terceiro.curso : null}</Text>

                    <Text style={{marginLeft: 10}}>Musicas:</Text>
                    <Text>{(terceiro.musica) ? terceiro.musica : null}</Text>
            </ScrollView>
        </View>
        </>
    )
}