import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Text, TouchableOpacity, Button, KeyboardAvoidingView, ScrollView } from 'react-native';
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
    const [vagas, setVagas] = useState();
    const [obs, setOBS] = useState();
    const [paradas, setParadas] = useState([]);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
      };
    
    const hideDatePicker = () => {
    setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        setData(date.toString().split(" "));
        setDatePickerVisibility(false);
      };

    function mostrarData(){
        if(data){
            return(
                <Text>{data[2]} {data[1]} {data[3]} {data[4].split(":")[0]}:{data[4].split(":")[1]} </Text>
            )
        }
        else{
            return
        }
    }

    async function publicarCarona() {

        const info = ({
            origem, 
            destino: [destino, paradas].join(),
            hora: data[4].split(":")[0], 
            minuto: data[4].split(":")[1],
            dia: data[2],
            mes: data[1],
            ano: data[3],
            preco,
            vagas,
            obs,
            usuario_email: dados.email,
            placaCarro: dados.placaCarro,
            modeloCarro: dados.modeloCarro,
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
                <Feather name="arrow-left" size={30} color="#999" onPress={navigation.goBack} /> 
            <View style={styles.header}>
                <Text style={styles.headerText}>Publicar Carona</Text>
                <Text style={styles.subtitleText}>(Preencha todos os dados)</Text>
            </View>

            <KeyboardAvoidingView behavior="padding" style={styles.inputs}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <TextInput
                    style={styles.inputText}
                    placeholder="De onde? (Cidade)"
                    autoCorrect={false}
                    onChangeText={setOrigem}
                />

                <Text style={styles.inputTextHeader}></Text>
                <TextInput
                    style={styles.inputText} 
                    placeholder="Para onde? (Cidade)"
                    autoCorrect={false}
                    onChangeText={setDestino}
                    />

                <Text style={styles.inputTextHeader}></Text>
                <TextInput
                    style={styles.inputText} 
                    placeholder="Paradas? (separe cidades por virgulas)"
                    autoCorrect={false}
                    onChangeText={setParadas}
                    />

                <Text style={styles.inputTextHeader}></Text>
                <Button title={`Clique para selecionar data \n e horário de saída`} onPress={showDatePicker} />
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="datetime"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />
                {mostrarData()}

                <Text style={styles.inputTextHeader}></Text>
                <TextInput
                    style={styles.inputText} 
                    placeholder="Informe aqui o preço por pessoa em reais" 
                    autoCorrect={false}
                    onChangeText={setPreco}
                    keyboardType='numeric'
                    />

                <Text style={styles.inputTextHeader}></Text>
                <TextInput
                    style={styles.inputText} 
                    placeholder="Quantas vagas?" 
                    autoCorrect={false}
                    onChangeText={setVagas}
                    keyboardType='numeric'
                    />

                <Text style={styles.inputTextHeader}></Text>
                <TextInput
                    style={styles.inputText} 
                    placeholder="Espaço para observações ou comentários" 
                    autoCorrect={false}
                    onChangeText={setOBS}
                    />

                <Text style={styles.inputTextHeader}></Text>
                <View style={styles.botoes}>
                    <TouchableOpacity 
                    style={styles.botaoLogin}
                    onPress={() => publicarCarona()}>
                        <Text style={styles.botaoLoginText}>Publicar</Text>
                    </TouchableOpacity>

                </View >
                </ScrollView>
        </KeyboardAvoidingView>
           
        </View>
    )
}