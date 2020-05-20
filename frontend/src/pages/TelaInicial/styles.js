import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    botaoCarona: {
        backgroundColor: '#347EBF',
        borderRadius: 10,
        height: 70,
        width: 135,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
    },

    botoesCaronas: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },

    botaoInicialAzul: {
        borderColor: '#347EBF',
        borderWidth: 3,
        borderRadius: 60,
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 40,
    },

    botaoInicialAmarelo: {
        borderColor: '#347EBF',
        borderWidth: 3,
        borderRadius: 60,
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 40,
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
        fontSize: 20,
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
        borderWidth: 3,
        borderRadius: 50,
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#aaa',
        marginRight: 15,
    },

    userName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#999',
    }
});