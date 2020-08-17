import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    buscar:{
        alignSelf:"center",
        alignItems:"center",
    },//Estilo da Lista

    buscarIcon:{
        height: 30,
        width: 30,
        alignSelf: 'center',
    },//Estilo do Buscar

    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: Constants.statusBarHeight + 15,
    },

    header: {
        alignItems: 'center',
        marginBottom: 20,
    },

    headerText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#818181'
    },

    CaronasList:{
        alignSelf:"center",
        marginTop: 10,
    },//Estilo da FlatList

    Caronas: {
        backgroundColor:"#347EBF",
        width: 300,
        marginBottom:10,
        borderRadius:20,
        padding: 10,
        flexDirection:"row"
    }, //Botões quadrados das caronas

    CaronasText:{
        alignSelf: 'auto',
        marginTop: 10,
        maxWidth: 135,
        marginLeft: 55,
        fontWeight: 'bold',
        color: '#ddd',
        fontSize: 14,
    },//Estilo dos Textos das Informações das caronas

    CaronasTextPreco:{
        alignSelf:"flex-end",
        marginTop: 10,
        marginLeft: 55,
        fontWeight: 'bold',
        fontSize: 24,
        color: '#ddd',
    },

    inputText: {
        backgroundColor: '#fff',
        borderColor: '#347EBF',
        borderWidth: 2,
        borderRadius: 10,  
        height: 50,
        width: 125,
        marginRight: 5,
        padding: 5,
        textAlign: 'center',
    },

    inputText2: {
        backgroundColor: '#fff',
        borderColor: '#347EBF',
        borderWidth: 2,
        borderRadius: 10,  
        height: 50,
        width: 60,
        marginHorizontal: 5,
        padding: 5,
        textAlign: 'center',
    },

    motoristaFoto: {
        borderColor: '#F2CA04',
        borderWidth: 2,
        borderRadius: 50,
        width: 100,
        height: 100,
        backgroundColor: '#aaa',
    },

    motoristaInfo: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    motoristaNome: {
        color: '#fff',
        fontWeight: 'bold',
        marginTop: 5,
    },
});