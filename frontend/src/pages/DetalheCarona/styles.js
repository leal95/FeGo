import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    botaoPedirCarona: {
        backgroundColor: '#347EBF',
        height: 50,
        width: 140,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },

    botaoEsperaCarona: {
        backgroundColor: '#F2CA04',
        height: 50,
        width: 140,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },

    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: Constants.statusBarHeight + 15,
    },

    Caronas: {
        backgroundColor:"#347EBF",
        width: 300,
        height: 'auto',
        marginBottom: 7,
        padding: 10,
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

    CaronasTextVP:{
        color: '#ddd',
        fontWeight: 'bold',
    },

    CaronasViewVP:{
        flexDirection: 'row',
        color: '#ddd',
        justifyContent: 'space-around',
        marginBottom: 10,
        marginTop: 5,
    },

    description: {
        alignSelf: 'center',
        marginBottom: 5,
        fontSize: 16,
    },

    espacamento: {
        marginBottom: 15,
    },

    Linhas: {
        color: 'lightgreen',
    },

    text: {
        alignSelf: 'center',
        fontWeight: 'bold',
        marginBottom: 5,
    },

    textPedirCarona: {
        color: '#F2CA04',
        fontWeight: 'bold',
        fontSize: 16
    },

    textEsperaCarona: {
        color: '#347EBF',
        fontWeight: 'bold',
        fontSize: 16
    },

    passaDescri: {
        alignSelf: 'center',
        fontSize: 16,
        marginTop: 20,
        marginBottom: 10,
    },
});