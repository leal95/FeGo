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

    headerText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#818181'
    },

    CaronasList:{
        alignSelf:"center",
    },//Estilo da FlatList

    userFoto: {
        borderColor: '#F2CA04',
        borderWidth: 2,
        borderRadius: 50,
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#aaa'
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
});  