import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: Constants.statusBarHeight + 35,
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

    Buscar:{
        alignSelf:"center",
        alignItems:"center",
        flexDirection:"row",
        marginTop:30
    },//Estilo do Buscar

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
        backgroundColor: '#aaa',
        marginTop: 30,
        marginLeft: 10,
    }, //Estilos da foto de Perfil


    Caronas: {
        backgroundColor:"#347EBF",
        width: 300,
        height:150,
        marginBottom:20,
        borderRadius:30,
        flexDirection:"row"
    }, //Botões quadrados das caronas

    CaronasText:{
        alignSelf:"flex-end",
        marginTop:20,
        marginRight:20,
        fontWeight: 'bold',
        color: '#ddd',
    },//Estilo dos Textos das Informações das caronas
    
    CaronasInfo:{
        marginLeft:40
    },//Posicionamento dos Textos
});