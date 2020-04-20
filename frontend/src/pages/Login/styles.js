import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    botaoCadastrar: {
    },

    textoCadastrese:{
        color: '#c4c4c4',
        fontSize: 14,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    
    botaoCadastrarText: {
        color: '#347EBF',
        fontSize: 16,
        textDecorationLine: "underline",
        justifyContent: 'center',
        alignItems: 'center',
    },

    botaoLogin: {
        backgroundColor: '#347EBF',
        borderRadius: 50,
        height: 50,
        width: 250,
        alignItems: 'center',
        justifyContent: 'center'
    },

    botaoLoginText: {
        color: '#fff',
        fontSize: 24,
        letterSpacing: 7,
    },

    botoes: {
        alignItems: 'center'
    },

    textosfinais:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },

    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: Constants.statusBarHeight + 35,
    },

    header: {
        paddingLeft: 32,
    },

    headerText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#818181'
    },

    inputs: {
        alignItems: 'center',
        height: 375,
        justifyContent: 'center'
    },

    inputText: {
<<<<<<< HEAD
        backgroundColor: '#fff',
        borderColor: '#347EBF',
        borderWidth: 2,
        borderRadius: 10,  
        height: 50,
        width: 300,
        padding: 10,
        
=======
>>>>>>> 84838d58acc772e40fad430306229322ecc05f19
    },

    inputTextHeader: {
        fontSize: 19,
        color: '#A2A2A2',
    }
});