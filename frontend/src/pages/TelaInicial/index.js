import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Text, TouchableOpacity } from 'react-native';
//importando react, ícones, useNavigation, useRoute e componentes do react native necessários

import styles from './styles'
//importando estilos do arquivo styles.js

export default function Cadastro() {
    const route = useRoute();
    const navigation = useNavigation();

    const dados = route.params.dados;
  
    function navigateToPage(page) {
        navigation.navigate(page, { dados });
    } //função para navegar para alguma página junto com os dados

    return(
        <>
        <View style={styles.container}>

            <View style={styles.user}>
                <TouchableOpacity style={styles.userFoto} onPress={() => navigateToPage('Perfil')}></TouchableOpacity>
                <TouchableOpacity onPress={() => navigateToPage('Perfil')}>
                    <Text style={styles.userName}> {dados.nome} {dados.sobrenome}</Text>
                </TouchableOpacity>
            </View>  

            <View style={styles.botoesCaronas}>
                <TouchableOpacity style={styles.botaoCarona} 
                onPress={()=>navigateToPage('PublicarCarona')}>
                    <Text style={styles.textCaronas}>Oferecer Carona</Text>
                </TouchableOpacity> 
                
                <TouchableOpacity style={styles.botaoCarona}
                onPress ={()=>navigateToPage('ListarCaronas')}>
                    <Text style={styles.textCaronas}>Procurar Carona</Text>
                </TouchableOpacity> 

                <TouchableOpacity style={styles.botaoCarona}
                onPress ={()=>navigateToPage('Mensagens')}>
                    <Text style={styles.textCaronas}>Mensagens</Text>
                </TouchableOpacity> 

                <TouchableOpacity style={styles.botaoCarona}
                onPress ={()=>navigateToPage('Historico')}>
                    <Text style={styles.textCaronas}>Histórico</Text>
                </TouchableOpacity> 
            </View>
        </View>
        </>
    )
}