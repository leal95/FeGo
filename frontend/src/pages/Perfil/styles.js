import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
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
        letterSpacing: 3,
    },

    botoes: {
        alignItems: 'center'
    },

    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: Constants.statusBarHeight + 35,
    },

    header: {
        alignItems: 'center'
    },

    headerText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#818181'
    },

    inputs: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    inputText: {
        backgroundColor: '#fff',
        borderColor: '#347EBF',
        borderWidth: 2,
        borderRadius: 10,  
        height: 50,
        width: 300,
        padding: 10,
    },

    inputTextHeader: {
        fontSize: 19,
        color: '#A2A2A2',
    },

    user: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    userFoto: {
        borderColor: '#F2CA04',
        borderWidth: 2,
        borderRadius: 50,
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#aaa',
    },

    userName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#999',
    }
});