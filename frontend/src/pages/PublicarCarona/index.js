import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Text, TouchableOpacity, Button, KeyboardAvoidingView, ScrollView } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import { TextInput } from 'react-native-gesture-handler';
import api from '../../services/api';
import {listaDeCidades} from '../../components/cidades'

export default function PublicarCarona() {
    const route = useRoute();
    const navigation = useNavigation();

    const dados = route.params.dados;

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const [origem, setOrigem] = useState();
    const [dataMilissegundos, setDataMilissegundos] = useState();
    const [encontro, setEncontro] = useState();
    const [destino, setDestino] = useState();
    const [data, setData] = useState();
    const [preco, setPreco] = useState();
    const [vagas, setVagas] = useState();
    const [obs, setOBS] = useState();
    const [paradas, setParadas] = useState([]);
    const [focusOrigem, setFocusOrigem] = useState(false);
    const [focusDestino, setFocusDestino] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
      };
    
    const hideDatePicker = () => {
    setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        setData(date.toString().split(" "));
        setDataMilissegundos(date.getTime());
        setDatePickerVisibility(false);
      };

    async function publicarCarona() {
        const info = ({
            origem,
            encontro,
            destino: [destino, paradas].join(),
            hora: data[4].split(":")[0], 
            minuto: data[4].split(":")[1],
            dia: data[2],
            mes: data[1],
            ano: data[3],
            dataMilissegundos,
            preco,
            vagas,
            obs,
            nome: dados.nome,
            email: dados.email,
            modeloCarro: dados.placaCarro,
            placaCarro: dados.modeloCarro,
        });

        try{
            await api.post('/caronas', info);

            alert("Sua Carona foi publicada com sucesso")

            navigation.navigate('TelaInicial', {dados});
        }
        catch(err){
            alert('Erro ao publicar carona!');
        };
    }

    function filtrarCidades(parametro) {
        let filtro = [];

        filtro = listaDeCidades.filter( cidade => {
            return cidade.indexOf(parametro) > -1;
        })

        if(filtro){
            return filtro.map((element) => (
                <TouchableOpacity onPress={() => console.log(element)} >
                    <Text>{element}</Text>
                </TouchableOpacity>
            ))
        }
    }

    function filtrarOrigem(parametro) {
        let cidadesOrigemFiltradas = filtrarCidades(parametro)

        if(focusOrigem) return cidadesOrigemFiltradas
        else null
    }

    function filtrarDestino(parametro) {
        let cidadesDestinoFiltradas = filtrarCidades(parametro)

        if(focusDestino) return cidadesDestinoFiltradas
        else null
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
                <Text>Digite o nome da cidade origem por extenso</Text>
                <TextInput
                    style={styles.inputText}
                    placeholder="De onde?"
                    autoCorrect={false}
                    onChangeText={setOrigem}
                    autoCapitalize="words"
                    onFocus={() => setFocusOrigem(true)}
                    onBlur={() => setFocusOrigem(false)}
                />
                {filtrarOrigem(origem)}
                
                <Text>Digite o nome da cidade destino por extenso</Text>
                <TextInput
                    style={styles.inputText} 
                    placeholder="Para onde?"
                    autoCorrect={false}
                    onChangeText={setDestino}
                    onFocus={() => setFocusDestino(true)}
                    onBlur={() => setFocusDestino(false)}
                    />
                {filtrarDestino(destino)}

                <Text>Separe as cidades de parada por virgulas</Text>
                <TextInput
                    style={styles.inputText}
                    placeholder="Paradas?"
                    autoCorrect={false}
                    autoCapitalize="words"
                    onChangeText={setParadas}
                    />

                <Text>Caso tenha mais de um, separe por virgulas</Text>
                <TextInput
                    style={styles.inputText} 
                    placeholder="Local de encontro"
                    autoCorrect={false}
                    onChangeText={setEncontro}
                    />

                <Button title={`Clique aqui para selecionar data \n e horário de saída`} onPress={showDatePicker} />
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="datetime"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />
                {(data) ? <Text>{data[2]} {data[1]} {data[3]} {data[4].split(":")[0]}:{data[4].split(":")[1]} </Text>: null}

                <TextInput
                style={styles.inputText} 
                placeholder="Informe aqui o preço por pessoa em reais" 
                autoCorrect={false}
                onChangeText={setPreco}
                keyboardType='numeric'
                returnKeyType="done"
                />

                <TextInput
                style={styles.inputText} 
                placeholder="Quantas vagas?" 
                autoCorrect={false}
                onChangeText={setVagas}
                keyboardType='numeric'
                returnKeyType="done"
                />

                <TextInput
                style={styles.inputTextOBS} 
                placeholder="Espaço para observações ou comentários" 
                autoCorrect={false}
                multiline = {true}
                numberOfLines = {3}
                onChangeText={setOBS}
                />
                
                <Text>Sugestões para as observações: </Text>
                <Text>{'- Tem ar condicionado?'} </Text>
                <Text>{'- Você permite comer no carro?'} </Text>
                <Text>{'- Tem espaço para malas?'} </Text>
                <Text>{'- Terão animais?'} </Text>
                <Text>{'- Você tem Sem Parar?'} </Text>
                <Text style={{marginBottom: 10}}>{'- Qual o tempo de tolerância?'} </Text>


                <View style={styles.botoes}>
                    <TouchableOpacity 
                    style={styles.botaoLogin}
                    onPress={() => publicarCarona()}>
                        <Text style={styles.botaoLoginText}>Publicar</Text>
                    </TouchableOpacity>

                </View>
                </ScrollView>
        </KeyboardAvoidingView>
           
        </View>
    )
}