import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: Constants.statusBarHeight + 15,
    },

    header: {
        alignItems: 'center',
        marginBottom: 20,
    },

    Caronas: {
        backgroundColor:"#347EBF",
        width: 300,
        height: 90,
        marginBottom:20,
        borderRadius: 15,
        alignSelf: 'center',
        justifyContent: 'center',
    }, //Botões quadrados das caronas

    CaronasTextMid:{
        color: '#ddd',
        alignSelf: 'center',
    },

    CaronasText:{
        fontWeight: 'bold',
        color: '#ddd',
        alignSelf: 'center',
        fontSize: 18,
    },//Estilo dos Textos das Informações das caronas

    CaronasTextPreco:{
        color: '#ddd',
        alignSelf: 'flex-end',
    },

    description: {
        alignSelf: 'center',
        marginBottom: 3,
    },

    Linhas: {
        color: 'lightgreen',
    },

    text: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 16,
    },

    motoDescri: {
        alignSelf: 'center',
        fontSize: 16,
        marginBottom: 10,
    },

    passaDescri: {
        alignSelf: 'center',
        fontSize: 16,
        marginTop: 20,
        marginBottom: 10,
    },
});