import React, { useState} from 'react';
import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Image, Text, TouchableOpacity, KeyboardAvoidingView, ScrollView, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { TextInput } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'

import styles from './styles';
import api from '../../services/api'; 

export default function Cadastro() {
    const route = useRoute();
    const navigation = useNavigation();

    const dados = route.params.dados;

    const [nome, setNome] = useState(dados.nome);
    const [sobrenome, setSobrenome] = useState(dados.sobrenome);
    const [apelido, setApelido] = useState(dados.apelido);
    const [numTelefone, setNumTelefone] = useState(dados.NumTelefone);
    const [ra, setRA] = useState(dados.ra);
    const [fumante, setFumante] = useState(dados.fumante);
    const [curso, setCurso] = useState(dados.curso);
    const [musica, setMusica] = useState(dados.musica);
    const [modeloCarro, setModeloCarro] = useState(dados.modeloCarro);
    const [placaCarro, setPlacaCarro] = useState(dados.placaCarro);
    const [corCarro, setCorCarro] = useState(dados.corCarro);
    const [imgSource, setImgSource] = useState(dados.imgSource);

    const askForPermission = async () => {
		const permissionResult = await Permissions.askAsync(Permissions.CAMERA_ROLL)
		if (permissionResult.status !== 'granted') {
			Alert.alert('Não temos permissão para acessar suas fotos!', [{ text: 'ok' }])
			return false
		}
		return true
    }
    
    takeImage = async () => {
		// make sure that we have the permission
		const hasPermission = await askForPermission()
		if (!hasPermission) {
			return
		} else {
			// launch the camera with the following settings
			let image = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				allowsEditing: true,
				aspect: [3, 3],
				quality: 1,
				base64: true,
            })
			// make sure a image was taken:
			if (!image.cancelled) {
				setImgSource(image.base64)
			}
		}
	}

    async function salvarDados() {
        //função para salvar os dados modificados e lidar com cláusulas referentes aos dados modificados
        const info = ({
            email: dados.email,
            nome,
            sobrenome,
            apelido,
            numTelefone,
            ra,
            fumante,
            curso,
            musica,
            placaCarro,
            modeloCarro,
            corCarro,
            imgSource,
        });

        try{
            const response = await api.put('/usuarios', info);
            
            let dadosAtt;

            if(response.data[0].nome){
                dadosAtt = response.data[0];
            }

            if(dadosAtt){
                navigation.navigate('TelaInicial', {dados} );
            }
            else{
                alert("Não foi possível salvar os dados, tente novamente mais tarde ou inclua uma imagem menor (em MB)")
            }
        }
        catch(err){
            alert('Erro ao fazer alteração das informações!');
            };
    }

    return(
        <>
        <View style={styles.container}>
            <Feather name="arrow-left" size={30} color="#999" onPress={navigation.goBack} /> 

            <KeyboardAvoidingView behavior="padding" style={styles.inputs}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.user}>
                        <TouchableOpacity onPress={() => takeImage()}>
                            <Image style={styles.userFoto} 
                            source={('../../../tmp/uploads/Carica.png') ? 
                            require('../../../tmp/uploads/Carica.png') : null} />
                        </TouchableOpacity>
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
                        <TextInput
                            style={styles.inputText}
                            placeholder={dados.nome}
                            autoCorrect={false}
                            onChangeText={setNome}
                        />

                        <Text style={{marginLeft: 10}}>Sobrenome:</Text>
                        <TextInput
                            style={styles.inputText}
                            placeholder={dados.sobrenome}
                            autoCorrect={false}
                            onChangeText={setSobrenome}
                        />

                        <Text style={{marginLeft: 10}}>Apelido:</Text>  
                        <TextInput
                            style={styles.inputText} 
                            placeholder={dados.apelido}
                            autoCorrect={false}
                            onChangeText={setApelido}
                            />
                            
                        <Text style={{marginLeft: 10}}>Telefone:</Text>
                        <TextInput
                        style={styles.inputText} 
                        placeholder={dados.numTelefone}
                        autoCorrect={false}
                        onChangeText={setNumTelefone}  
                        autoCapitalize='none'
                        keyboardType="numeric"
                        />

                        <Text style={{marginLeft: 10}}>Placa do Carro:</Text>  
                        <TextInput
                            style={styles.inputText} 
                            placeholder={dados.placaCarro}
                            autoCorrect={false}
                            onChangeText={setPlacaCarro}
                            />

                        <Text style={{marginLeft: 10}}>Modelo do Carro:</Text>  
                        <TextInput
                            style={styles.inputText} 
                            placeholder={dados.modeloCarro}
                            autoCorrect={false}
                            onChangeText={setModeloCarro}
                            />

                        <Text style={{marginLeft: 10}}>Cor do Carro:</Text>  
                        <TextInput
                            style={styles.inputText} 
                            placeholder={dados.corCarro}
                            autoCorrect={false}
                            onChangeText={setCorCarro}
                            />

                        <Text style={{marginLeft: 10}}>RA:</Text>
                        <TextInput
                            style={styles.inputText} 
                            placeholder={dados.ra}
                            autoCorrect={false}
                            onChangeText={setRA}  
                            autoCapitalize='none'
                            keyboardType="numeric"
                            />

                        <Text style={{marginLeft: 10}}>Permite fumar no carro?:</Text>
                        <RNPickerSelect
                            style={pickerSelectStyles}
                            placeholder={dados.fumante? {label: dados.fumante, value: dados.fumante} : {label: 'Permite fumar no carro?', value: null}}
                            onValueChange={(value) => setFumante(value)}
                            items={[
                                { label: 'Sim', value: 'Sim' },
                                { label: 'Nao', value: 'Nao' },
                            ]}
                        />
                        
                        <Text style={{marginLeft: 10}}>Curso:</Text>
                        <RNPickerSelect
                            style={pickerSelectStyles}
                            placeholder={dados.curso? {label: dados.curso, value: dados.curso} : {label: 'Curso', value: null}}
                            onValueChange={(value) => setCurso(value)}
                            items={[
                                { label: 'Engenharia Civil', value: 'Engenharia Civil' },
                                { label: 'Engenharia Elétrica', value: 'Engenharia Elétrica' },
                                { label: 'Engenharia de Materiais', value: 'Engenharia de Materiais' },
                                { label: 'Engenharia de Produção', value: 'Engenharia de Produção' },
                                { label: 'Engenharia Mecânica', value: 'Engenharia Mecânica' },
                                { label: 'Física', value: 'Física' },
                                { label: 'Matemática', value: 'Matemática' },
                                { label: 'Pós-Graduação', value: 'Pós-Graduação' },
                            ]}
                        />

                        <Text style={{marginLeft: 10}}>Musicas:</Text>
                        <TextInput
                            style={styles.inputText} 
                            placeholder={dados.musica}
                            autoCorrect={false}
                            onChangeText={setMusica}
                            /> 

                        <TouchableOpacity 
                        style={styles.botaoLogin} 
                        onPress={() => salvarDados()}>
                            <Text style={styles.botaoLoginText}>Salvar</Text>
                        </TouchableOpacity>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
        </>
    )
}

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        backgroundColor: '#fff',
        borderColor: '#347EBF',
        borderWidth: 2,
        borderRadius: 10,  
        height: 50,
        width: 300,
        padding: 10,
        marginLeft: 5,
    },
    inputAndroid: {
        backgroundColor: '#fff',
        borderColor: '#347EBF',
        borderWidth: 2,
        borderRadius: 10,  
        height: 50,
        width: 300,
        padding: 10,
        marginLeft: 5,
    },
  });