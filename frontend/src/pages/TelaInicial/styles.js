import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    botaoCarona: {
        backgroundColor: '#347EBF',
        borderRadius: 10,
        height: 70,
        width: 135,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
    }, //Estilos dos dois botões do fim da página ("Oferecer carona" e "Procurar Carona")

    botoesCaronas: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },  //posição dos botões do fim da página

    botaoInicial: {
        borderColor: '#347EBF',
        backgroundColor: '#fff',
        borderWidth: 3.8,
        borderRadius: 60,
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    }, //Estilos dos botões redondos

    botoesIniciais: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    }, //Posição dos botões redondos

    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: Constants.statusBarHeight + 5,
    }, //Estilo do Container

    header: {
        alignItems: 'center'
    }, //Estilo do cabeçalho

    headerText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#999',
    }, //Estilo do texto do cabelçalho

    textCaronas: {
        color: '#fff',
        fontSize: 22,
        letterSpacing: 2,
    }, //estilo dos textos dos dois botões do final da página

    user: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }, //posição dos elementos para a foto de perfil e nome de usuário

    userFoto: {
        borderColor: '#F2CA04',
        borderWidth: 3,
        borderRadius: 50,
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#aaa',
        marginRight: 15,    
    }, //estilo da foto de perfil

    userName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#999',
    } //estilo da fonte para o nome do usuário
});