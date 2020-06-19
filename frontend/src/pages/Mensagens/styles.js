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

    Icons: 
    {
        marginTop:15,
        alignSelf:"flex-end",
        marginRight:1,
    }, //estilo dos icones


    MensagensList:{
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
        backgroundColor: '#aaa',
        marginTop: 25,
        marginLeft: 10,
    }, //Estilos da foto de Perfil


    Mensagens: {
        backgroundColor:"#347EBF",
        width: 315,
        height:150,
        marginBottom:20,
        borderRadius:30,
        flexDirection:"row"
    }, //Quadrados das caronas

    Conteudo:{
        marginTop: 10,
        maxWidth: 150,
        marginLeft: 10,
        marginRight: 10,
        fontWeight: 'bold',
        color: '#ddd',
        fontSize: 14,
    },//Estilo do Texto da Mensagem

});