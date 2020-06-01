import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import { TextInput } from 'react-native-gesture-handler';
import api from '../../services/api';
//import TimePicker from 'react-native-simple-time-picker';



export default function PublicarCarona() { 
    const route = useRoute();
    const navigation = useNavigation();

    const dados = route.params.dados;

    const [origem, setOrigem] = useState();
    const [destino, setDestino] = useState();
    const [horario, setHorario] = useState();
    const [dia, setDia] = useState();
    const [mes, setMes] = useState();
    const ano = 2020;

    function navigateToTelaInicial() {
        navigation.navigate('TelaInicial', {dados});
    };

    async function publicarCarona() {
        const info = ({
            origem, 
            destino, 
            hora: horario.split(':')[0],  
            minuto: horario.split(':')[1], 
            dia, 
            mes, 
            ano, 
            usuario_email: dados.email,
        });

        try{
            await api.post('/caronas', info);

            navigateToTelaInicial();
        }
        catch(err){
            alert('Erro ao publicar carona!');
        };
    }
    
    return(
        <View style={styles.container}>
                <Feather name="arrow-left" size={24} color="#999" onPress={navigateToTelaInicial} /> 
            <View style={styles.header}>
                <Text style={styles.headerText}>Publicar Carona</Text>
                <Text style={styles.subtitleText}>(Preencha todos os dados)</Text>
            </View>

            <KeyboardAvoidingView behavior="padding" style={styles.inputs}>
                
                <TextInput
                    style={styles.inputText}
                    placeholder="De onde?"
                    autoCorrect={false}
                    onChangeText={setOrigem}
                />

                <Text style={styles.inputTextHeader}></Text>
                <TextInput
                    style={styles.inputText} 
                    placeholder="Para onde?"
                    autoCorrect={false}
                    onChangeText={setDestino}
                    />

                <Text style={styles.inputTextHeader}></Text>
                <TextInput
                    style={styles.inputText} 
                    placeholder="Dia" 
                    autoCorrect={false}
                    onChangeText={setDia}
                    />

                <Text style={styles.inputTextHeader}></Text>
                <TextInput
                    style={styles.inputText} 
                    placeholder="Mes" 
                    autoCorrect={false}
                    onChangeText={setMes}
                    />

                <Text style={styles.inputTextHeader}></Text>
                <TextInput
                    style={styles.inputText} 
                    placeholder="Horário" 
                    autoCorrect={false}
                    onChangeText={setHorario}
                    />
            </KeyboardAvoidingView>

            <View style={styles.botoes}>
                <TouchableOpacity 
                style={styles.botaoLogin}
                onPress={() => publicarCarona()}>
                    <Text style={styles.botaoLoginText}>Publicar</Text>
                </TouchableOpacity>

            </View >
           
        </View>
    )
}