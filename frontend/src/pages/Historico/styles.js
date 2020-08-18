import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    buscar:{
        alignSelf:"center",
        alignItems:"center",
    },//Estilo do Buscar

    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: Constants.statusBarHeight + 15,
    },

    header: {
        alignItems: 'center',
    },

    headerText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#818181'
    },

    CaronasList:{
        alignSelf:"center",
        marginTop: 20,
    },//Estilo da FlatList

    userFoto: {
        borderColor: '#F2CA04',
        borderWidth: 2,
        borderRadius: 50,
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#aaa',
        marginTop: 30,
        marginLeft: 10,
    }, //Estilos da foto de Perfil


    Caronas: {
        backgroundColor:"#347EBF",
        width: 315,
        height:150,
        marginBottom:20,
        borderRadius:30,
        flexDirection:"row"
    }, //Botões quadrados das caronas

    CaronasText:{
        alignSelf:"flex-end",
        marginTop: 10,
        maxWidth: 150,
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

    },
});