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

    let infosCarona;

    (route.params.infosCarona) ? infosCarona = route.params.infosCarona : infosCarona = {};

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const [origem, setOrigem] = useState(infosCarona.origem);
    const [dataMilissegundos, setDataMilissegundos] = useState(infosCarona.dataMilissegundos);
    const [encontro, setEncontro] = useState(infosCarona.encontro);
    const [destino, setDestino] = useState(infosCarona.destino.split(",")[0]);
    const [data, setData] = useState();
    const [preco, setPreco] = useState(infosCarona.preco);
    const [vagas, setVagas] = useState(infosCarona.vagas);
    const [obs, setOBS] = useState(infosCarona.obs);
    const [paradas, setParadas] = useState(infosCarona.destino);
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
            const response = await api.get('/caronas')

            let permissaoPublicar = true;
            
            response.data.map( carona => {
                if(carona.email == dados.email){
                    alert("Você já tem uma carona publicada, caso ela já tenha se encerrado vá para a página de Procurar Caronas e volte aqui para recarregar")

                    permissaoPublicar = false;

                    navigation.navigate('TelaInicial', {dados});
                }
                else{
                    if(carona.passageiros){
                        if(carona.passageiros.indexOf(dados.email) > -1){
                            alert("Você está listado como passageiro em uma carona já e por isso você não pode publicar")

                            permissaoPublicar = false;

                            navigation.navigate('TelaInicial', {dados});
                        }
                    }
                    
                }
            })

            if(permissaoPublicar){
                try{
                    await api.post('/caronas', info);

                    alert("Sua Carona foi publicada com sucesso")

                    navigation.navigate('TelaInicial', {dados});
                }
                catch(err){
                    alert('Erro ao publicar carona!')
                }
            }
        }

        catch(err){
            alert('Erro ao publicar carona!');
        };
    }

    async function salvarCarona() {
        const info = ({
            encontro,
            destino: paradas,
            hora: data[3], 
            minuto: data[4],
            dia: data[0],
            mes: data[1],
            ano: data[2],
            dataMilissegundos,
            preco,
            vagas,
            obs,
        });

        try{
            let listaEspera = infosCarona.listaEspera
            if(listaEspera){
                listaEspera.split(',').map((element) => {
                    const mensagem = ({
                        estado: "Respondida",
                        desinatarioEmail: element,
                        desinatarioNome: 'Passenger',
                        emissarioEmail: dados.email,
                        emissarioNome: dados.nome,
                        mensagem: `Olá, passageiro! 
                        Fiz alterações nas informações da nossa carona, por favor confira! 
                        (Caso não tenha notado nenhuma diferenca nao tem problema)`
                    })

                    await api.post(`/usuarios/mensagens`, mensagem);
                })
            }
        }
        catch(err){
            alert('Erro ao enviar mensagens para os passageiros')
        }

        try{
            await api.put('/caronas', info);

            alert("Sua Carona foi alterada com sucesso e os passageiros foram avisados")

            navigation.navigate('TelaInicial', {dados});
        }
        catch(err){
            alert('Erro ao publicar carona!')
        }
    }

    function filtrarCidades(parametro) {
        let filtro = [];

        filtro = listaDeCidades.filter( cidade => {
            return cidade.indexOf(parametro) > -1;
        })

        if(filtro == parametro){
            filtro = [];
        }

        if(filtro){
            return filtro.map((element) => (
                <TouchableOpacity style={{marginVertical: 2}} key={`${element}-${parametro}`} onPress={() => {
                    if(!focusDestino) setOrigem(element);
                    else setDestino(element);
                }} >
                    <Text style={{fontWeight: 'bold'}}>{element}</Text>
                </TouchableOpacity>
            ))
        }
    }

    function filtrarOrigem(parametro) {
        let cidadesOrigemFiltradas = filtrarCidades(parametro)

        if(!focusDestino) return cidadesOrigemFiltradas
        else null
    }

    function filtrarDestino(parametro) {
        let cidadesDestinoFiltradas = filtrarCidades(parametro)

        if(!focusOrigem) return cidadesDestinoFiltradas
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
                    defaultValue={infosCarona.origem}
                    placeholder="De onde?"
                    autoCorrect={false}
                    onChangeText={setOrigem}
                    value={origem}
                    autoCapitalize="words"
                    onFocus={() => setFocusOrigem(true)}
                    onBlur={() => setFocusOrigem(false)}
                />
                {filtrarOrigem(origem)}
                
                <Text>Digite o nome da cidade destino por extenso</Text>
                <TextInput
                    style={styles.inputText} 
                    defaultValue={infosCarona.destino}
                    placeholder="Para onde?"
                    autoCorrect={false}
                    onChangeText={setDestino}
                    value={destino}
                    onFocus={() => setFocusDestino(true)}
                    onBlur={() => setFocusDestino(false)}
                    />
                {filtrarDestino(destino)}

                <Text>Separe as cidades de parada por virgulas</Text>
                <TextInput
                    style={styles.inputText}
                    defaultValue={infosCarona.paradas}
                    placeholder="Paradas?"
                    autoCorrect={false}
                    autoCapitalize="words"
                    onChangeText={setParadas}
                    />

                <Text>Caso tenha mais de um, separe por virgulas</Text>
                <TextInput
                    style={styles.inputText} 
                    defaultValue={infosCarona.encontro}
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
                defaultValue={infosCarona.preco}
                placeholder="Informe aqui o preço por pessoa em reais" 
                autoCorrect={false}
                onChangeText={setPreco}
                keyboardType='numeric'
                returnKeyType="done"
                />

                <TextInput
                style={styles.inputText} 
                defaultValue={infosCarona.vagas}
                placeholder="Quantas vagas?" 
                autoCorrect={false}
                onChangeText={setVagas}
                keyboardType='numeric'
                returnKeyType="done"
                />

                <TextInput
                style={styles.inputTextOBS} 
                defaultValue={infosCarona.obs}
                placeholder="Escreva aqui se tem sem parar, ar condicionado, espaço para malas, animais ou se pode comer no carro" 
                autoCorrect={false}
                multiline = {true}
                numberOfLines = {3}
                onChangeText={setOBS}
                />


                <View style={styles.botoes}>
                    {(infosCarona) ?
                    <TouchableOpacity 
                    style={styles.botaoLogin}
                    onPress={() => salvarCarona()}>
                        <Text style={styles.botaoLoginText}>Salvar</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity 
                    style={styles.botaoLogin}
                    onPress={() => publicarCarona()}>
                        <Text style={styles.botaoLoginText}>Publicar</Text>
                    </TouchableOpacity>}

                </View>
                </ScrollView>
        </KeyboardAvoidingView>
           
        </View>
    )
}