import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
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

    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: Constants.statusBarHeight + 5,
    },

    header: {
        alignItems:'center',
        marginBottom: -20,
    },

    headerText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#818181'
    },

    inputs: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
        marginBottom: 25,
        height: 420,
    },

    inputText: {
        backgroundColor: '#fff',
        borderColor: '#347EBF',
        borderWidth: 2,
        borderRadius: 10,  
        height: 50,
        width: 300,
        padding: 10,
        marginTop: 15,
    },

    inputTextOBS: {
        backgroundColor: '#fff',
        borderColor: '#347EBF',
        borderWidth: 2,
        borderRadius: 10,
        width: 300,
        padding: 10,
        marginTop: 15,
        minHeight: 50,
        justifyContent: 'center',
        
    },

    subtitleText: {
        fontSize: 20,
        color: '#818181',
    }
});