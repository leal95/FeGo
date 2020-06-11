import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Text, TouchableOpacity, Button, KeyboardAvoidingView } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import { TextInput } from 'react-native-gesture-handler';
import api from '../../services/api';
//import TimePicker from 'react-native-simple-time-picker';



export default function PublicarCarona() { 
    const route = useRoute();
    const navigation = useNavigation();

    const dados = route.params.dados;

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const [origem, setOrigem] = useState();
    const [destino, setDestino] = useState();
    const [data, setData] = useState();
    const [preco, setPreco] = useState();
    const [paradas, setParadas] = useState([]);
    const ano = 2020;

    function navigateToTelaInicial() {
        navigation.navigate('TelaInicial', {dados});
    };

    const showDatePicker = () => {
        setDatePickerVisibility(true);
      };
    
    const hideDatePicker = () => {
    setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.log("nova data");
        console.log(date.getDate());
        console.log(date.getDay());
        console.log(date.getMonth());
        console.log(date.getYear());
        console.log(date.toString()[0]);
        console.log(date.getHours());
        console.log(date.getMinutes());
        setDatePickerVisibility(false);
      };

    async function publicarCarona() {
        const info = ({
            origem, 
            destino,
            paradas,
            hora: horario.split(':')[0],  
            minuto: horario.split(':')[1], 
            dia: data.split('/')[0],
            mes: data.split('/')[1], 
            ano,
            preco,
            usuario_email: dados.email,
        });

        console.log(info);

        /*try{
            await api.post('/caronas', info);

            navigateToTelaInicial();
        }
        catch(err){
            alert('Erro ao publicar carona!');
        };*/
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
                    placeholder="Para em alguma cidade?"
                    autoCorrect={false}
                    onChangeText={setParadas}
                    />

                <Text style={styles.inputTextHeader}></Text>
                <Button title="Selecione a data e horário" onPress={showDatePicker} />
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="datetime"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />

                <Text style={styles.inputTextHeader}></Text>
                <TextInput
                    style={styles.inputText} 
                    placeholder="Preço por pessoa, em reais" 
                    autoCorrect={false}
                    onChangeText={setPreco}
                    />

                    <Text style={styles.inputTextHeader}></Text>
                    <View style={styles.botoes}>
                        <TouchableOpacity 
                        style={styles.botaoLogin}
                        onPress={() => publicarCarona()}>
                            <Text style={styles.botaoLoginText}>Publicar</Text>
                        </TouchableOpacity>

                    </View >
            </KeyboardAvoidingView>
           
        </View>
    )
}