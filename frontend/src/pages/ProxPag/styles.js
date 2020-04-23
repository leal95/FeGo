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
        height: 390,
        justifyContent: 'center',
        marginBottom: 20
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

    tosText: {

        fontSize: 20,
        fontWeight: 'bold',
        maxWidth: 280,
        padding: 15
    },

    textosfinais: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    }

});