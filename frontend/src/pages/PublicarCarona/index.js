import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import { View, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import { TextInput } from 'react-native-gesture-handler';
//import TimePicker from 'react-native-simple-time-picker';



export default function PublicarCarona() { 
    
    const navigation = useNavigation();



    function navigateToTelaInicial() {
        navigation.navigate('TelaInicial');
    };

    
    return(
        <View style={styles.container}>
                <TouchableOpacity style={styles.botaoVoltar}>
                    <Feather name="arrow-left" size={24} color="#858585" onPress={navigateToTelaInicial}/>
                </TouchableOpacity>
            <View style={styles.header}>
                <Text style={styles.headerText}>Publicar Carona</Text>
            </View>

            <KeyboardAvoidingView behavior="padding" style={styles.inputs}>
                
                <TextInput
                    style={styles.inputText}
                    placeholder="De onde?"
                    autoCorrect={false}
                />

                <Text style={styles.inputTextHeader}></Text>
                <TextInput
                    style={styles.inputText} 
                    placeholder="Para onde?"
                    autoCorrect={false}
                    />
            <Text style={styles.inputTextHeader}></Text>
                <TextInput
                    style={styles.inputText} 
                    placeholder="Data" 
                    autoCorrect={false}
                    />
 

                <Text style={styles.inputTextHeader}></Text>
                <TextInput
                    style={styles.inputText} 
                    placeholder="Hora" 
                    autoCorrect={false}
                    />
            </KeyboardAvoidingView>

            <View style={styles.botoes}>
                <TouchableOpacity 
                style={styles.botaoLogin}>
                    <Text style={styles.botaoLoginText}>Publicar</Text>
                </TouchableOpacity>

            </View >


           
        </View>
    )
}