import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    botaoCadastrar: {
        backgroundColor: '#347EBF',
        borderRadius: 50,
        height: 45,
        width: 250,
        alignItems: 'center',
        justifyContent: 'center'
    },

    botaoCadastrarText: {
        color: '#fff',
        fontSize: 19,
        letterSpacing: 1.5,
        
    },
    
    botaoLogin: {
    },

    botaoLoginText: {
        color: '#347EBF',
        fontSize: 20,
        textDecorationLine: 'underline'
    },

    textoLogin:{
        color: '#ccc',
        paddingTop: 5,
        fontSize: 15,

    },

    botoes: {
        alignItems: 'center'
    },

    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: Constants.statusBarHeight + 15,
    },

    header: {
        alignItems: 'center'
    },

    headerText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#999',
    },

    inputs: {
        alignItems: 'center',
        height: 275,
        justifyContent: 'center'
    },

    inputText: {
        backgroundColor: '#fff',
        borderColor: '#347EBF',
        borderWidth: 3,
        borderRadius: 15,  
        height: 50,
        width: 300,
        padding: 10,
        
        
        
    },

    inputTextHeader: {
        fontSize: 20,
    },

    tos: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
               
        
    },

    tosText: {

        fontSize: 20,
        paddingLeft: 0,
        maxWidth: 220,
        
    },

    botaoTeC:{
        borderColor: '#347EBF',
        paddingTop: 3,
        paddingRight: 20,
        paddingLeft: 10,
        backgroundColor: '#fff',
        borderWidth: 3,
        borderRadius: 10,
        maxHeight: 50,
        maxWidth: 50,
        
    },

    textosfinais: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    }

});