import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    botaoLogin: {
        backgroundColor: '#347EBF',
        borderRadius: 50,
        height: 50,
        width: 175,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    }, //Estilos dos botão "Salvar"

    botaoLoginText: {
        color: '#fff',
        fontSize: 24,
        letterSpacing: 3,
    }, //Estilos do texto do botão "Salvar"

    botoes: {
        alignItems: 'center'
    }, //Alinhamento dos botões no centro

    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: Constants.statusBarHeight + 15,
    }, //Estilos do Container

    header: {
        alignItems: 'center'
    }, //Estilos do cabeçalho
 
    headerText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#818181'
    }, // Estilos do texto do cabeçalho

    inputs: {
        alignItems: 'center',
        justifyContent: 'center'
    }, //Posião das caixas de input de texto

    inputText: {
        backgroundColor: '#fff',
        borderColor: '#347EBF',
        borderWidth: 2,
        borderRadius: 10,  
        height: 50,
        width: 300,
        padding: 10,
    }, //Estilo das caixas de input de Texto

    inputTextHeader: {
        fontSize: 19,
        color: '#A2A2A2',
    }, //Estilo do texto das caixas de input

    user: {
        alignItems: 'center',
        justifyContent: 'center',
    }, //Posição do nome e da foto de perfil

    userFoto: {
        borderColor: '#F2CA04',
        borderWidth: 3,
        borderRadius: 50,
        width: 90,
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#aaa',
    marginRight: 5,
    }, //Estilos da foto de Perfil

    userName: {
        fontSize: 19,
        fontWeight: 'bold',
        color: '#999',
    }, //Estilos da fonte para o nome do usuário

    userEmail: {
        alignSelf: 'center',
        fontSize: 14,
    }
});