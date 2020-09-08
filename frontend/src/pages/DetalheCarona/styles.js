import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    avaliacaoView: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginBottom: 10,
    },

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
        padding: 10,
        borderRadius: 15,
        alignSelf: 'center',
        justifyContent: 'center',
    }, //Botões quadrados das caronas

    CaronasText:{
        fontWeight: 'bold',
        color: '#ddd',
        alignSelf: 'center',
        fontSize: 18,
    },//Estilo dos Textos das Informações das caronas

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

    inputText: {
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderColor: '#347EBF',
        textAlign: 'center',
        borderWidth: 2,
        borderRadius: 10,
        padding: 5,
        width: 50,
        marginLeft: 5,
    }, //Estilo das caixas de input de Texto

    Linhas: {
        color: 'lightgreen',
    },

    text: {
        alignSelf: 'center',
        fontWeight: 'bold',
        marginBottom: 5,
        fontSize: 18,
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
});