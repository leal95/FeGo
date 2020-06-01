import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    botaoCadastrar: {
        backgroundColor: '#347EBF',
        borderRadius: 50,
        height: 45,
        width: 250,
        alignItems: 'center',
        justifyContent: 'center'
    }, //Estilo do botão "Concluir Cadastro" 

    botaoCadastrarText: {
        color: '#fff',
        fontSize: 19,
        letterSpacing: 1.5,
        
    }, //Estilo do Texto do botão "Concluir Cadastro" 


    botaoLogin: {
    }, //Estilo do botão de Login 

    botaoLoginText: {
        color: '#347EBF',
        fontSize: 20,
        textDecorationLine: 'underline'
    }, //Estilo do Texto do botão de Login

    textoLogin:{
        color: '#ccc',
        paddingTop: 5,
        fontSize: 15,

    }, //Estilo do Texto "Já possui conta?"

    botoes: {
        alignItems: 'center'
    }, //Estilo para alinhar botões no centro

    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: Constants.statusBarHeight + 15,
    }, //Estilo do container 

    header: {
        alignItems: 'center'
    }, //Estilo dos headers, para o conteúdo estar alinhado no centro 

    headerText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#999',
    }, //Estilo do Texto do cabeçalho


    inputs: {
        alignItems: 'center',
        height: 390,
        justifyContent: 'center',
        marginBottom: 20
    }, //Estilo das caixas de input

    inputText: {
        backgroundColor: '#fff',
        borderColor: '#347EBF',
        borderWidth: 3,
        borderRadius: 15,  
        height: 50,
        width: 300,
        padding: 10,
    }, //Estilo dos textos nas caixas de input

    inputTextHeader: {
        fontSize: 20,
    }, 

    tosText: {

        fontSize: 20,
        fontWeight: 'bold',
        maxWidth: 280,
        padding: 15
    }, //Estilo do texto dos Termos e condições

    textosfinais: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    } //Estilos dos textos no final da página

}); 