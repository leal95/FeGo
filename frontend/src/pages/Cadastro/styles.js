import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    botaoCadastrar: {
        backgroundColor: '#347EBF',
        borderRadius: 10,
        height: 40,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center'
    },

    botaoCadastrarText: {
        color: '#fff',
        fontSize: 20
    },
    
    botaoLogin: {
    },

    botaoLoginText: {
        color: '#C4C4C4',
        fontSize: 20
    },

    botoes: {
        alignItems: 'center'
    },

    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        paddingTop: Constants.statusBarHeight + 5,
    },

    header: {
        alignItems: 'center'
    },

    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#999',
    },

    inputs: {
        alignItems: 'center',
        height: 300,
        justifyContent: 'center'
    },

    inputText: {
        
    },

    inputTextHeader: {
        fontSize: 18,
        color: '#A2A2A2',
    },

    tos: {
        marginTop: 25,
        marginBottom: 25
    },

    tosText: {
        fontSize: 16
    }
});