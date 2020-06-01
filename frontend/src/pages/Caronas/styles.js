import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    botaoCadastrar: {
    },

    textoCadastrese:{
        color: '#c4c4c4',
        fontSize: 14,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    
    
    botaoCadastrarText: {
        color: '#347EBF',
        fontSize: 16,
        textDecorationLine: "underline",
        justifyContent: 'center',
        alignItems: 'center',
    },

    botaoVoltar:{
        position: 'absolute',
        left:15, top:30,
        },
        
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

    textosfinais:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },

    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: Constants.statusBarHeight + 35,
    },

    header: {
        paddingLeft: 32,
    },

    headerText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#818181'
    },

    inputs: {
        alignItems: 'center',
        height: 375,
        justifyContent: 'center'
    },

    Buscar:{
        alignSelf:"center",
        alignItems:"center",
        flexDirection:"row",
        marginTop:30

    },//Estilo do Buscar

    CaronasList:{
        alignSelf:"center",
        marginTop:50,
        marginBottom:50,
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
        marginTop: 30
    }, //Estilos da foto de Perfil


    Caronas: {
        backgroundColor:"#347EBF",
        width: 330,
        height:155,
        marginBottom:20,
        borderRadius:30,
        flexDirection:"row"
    }, //Botões quadrados das caronas

    CaronasText:{
        alignSelf:"flex-end",
        marginTop:20,
        marginRight:20
    },//Estilo dos Textos das Informações das caronas
    
    CaronasInfo:{
        marginLeft:40
    },//Posicionamento dos Textos
    
    
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
    }
});