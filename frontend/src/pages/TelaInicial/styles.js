import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    botaoCarona: {
        backgroundColor: '#347EBF',
        borderRadius: 15,
        height: 50,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center'
    },

    botoesCaronas: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },

    botaoInicialAzul: {
        borderColor: '#F2CA04',
        borderRadius: 25,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#347EBF',
    },

    botaoInicialAmarelo: {
        borderColor: '#347EBF',
        borderRadius: 25,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F2CA04',
    },

    botoesIniciais: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
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

    textCaronas: {
        color: '#fff',
        fontSize: 22,
        letterSpacing: 2,
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