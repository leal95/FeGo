import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    botaoCadastrar: {
    }, //Estilo do Botão para navegar para a tela de cadastro, no final da página

    textoCadastrese:{
        color: '#c4c4c4',
        fontSize: 14,
        justifyContent: 'center',
        alignItems: 'center',
        
    }, //estilo do texto "Não poossui conta?" no botão de navegação para a tela de cadastro
    
    botaoCadastrarText: {
        color: '#347EBF',
        fontSize: 16,
        textDecorationLine: "underline",
        justifyContent: 'center',
        alignItems: 'center',
    }, //Estilo do texto "Cadastre-se" no botão de navegação para a tela de Cadastro

    botaoLogin: {
        backgroundColor: '#347EBF',
        borderRadius: 50,
        height: 50,
        width: 250,
        alignItems: 'center',
        justifyContent: 'center'
    }, //Estilo do botão de Login

    botaoLoginText: {
        color: '#fff',
        fontSize: 24,
        letterSpacing: 3,
    }, //Estilo do texto no botão de Login

    botoes: {
        alignItems: 'center'
    }, //Alinhando botões no centro

    textosfinais:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    }, //Posição dos textos no final da página

    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: Constants.statusBarHeight + 35,
    }, //Estilo do container

    header: {
        paddingLeft: 32,
    }, //Estilo do cabeçalho

    headerText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#818181'
    }, //Estilo do texto do cabeçalho

    inputs: {
        alignItems: 'center',
        height: 375,
        justifyContent: 'center'
    }, //posição e alinhamento das caixas de input

    inputText: {
        backgroundColor: '#fff',
        borderColor: '#347EBF',
        borderWidth: 2,
        borderRadius: 10,  
        height: 50,
        width: 300,
        padding: 10,
    },  //Estilo das caixas de inpput de texto

    inputTextHeader: {
        fontSize: 19,
        color: '#A2A2A2',
    } //Estilo dos textos das caixas de input
});