import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    botaoCadastrar: {
    },

    botaoCadastrarText: {
        color: '#C4C4C4',
        fontSize: 20
    },

    botaoLogin: {
        backgroundColor: '#347EBF',
        borderRadius: 10,
        height: 40,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center'
    },

    botaoLoginText: {
        color: '#fff',
        fontSize: 20
    },

    botoes: {
        alignItems: 'center'
    },

    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        alignItems: 'center'
    },

    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#818181'
    },

    inputs: {
        alignItems: 'center',
        height: 350,
        justifyContent: 'center'
    },

    inputText: {
        
    },

    inputTextHeader: {
        fontSize: 18,
        color: '#A2A2A2',
    }
});