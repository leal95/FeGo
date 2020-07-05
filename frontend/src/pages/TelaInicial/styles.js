import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    botaoCarona: {
        backgroundColor: '#347EBF',
        borderRadius: 10,
        height: 70,
        width: 250,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 40,
    }, //Estilos dos dois botões do fim da página ("Oferecer carona" e "Procurar Carona")

    botaoInicial: {
        borderColor: '#347EBF',
        backgroundColor: '#fff',
        borderWidth: 3.8,
        borderRadius: 60,
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    }, //Estilos dos botões redondos

    botoesIniciais: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    }, //Posição dos botões redondos

    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: Constants.statusBarHeight + 50,
    }, //Estilo do Container

    textCaronas: {
        color: '#fff',
        fontSize: 22,
        letterSpacing: 2,
    }, //estilo dos textos dos dois botões do final da página

    user: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
    }, //posição dos elementos para a foto de perfil e nome de usuário

    userFoto: {
        borderColor: '#F2CA04',
        borderWidth: 3,
        borderRadius: 40,
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#aaa',  
    }, //estilo da foto de perfil

    userName: {
        marginTop: 10,
        fontSize: 22,
        fontWeight: 'bold',
        color: '#999',
    } //estilo da fonte para o nome do usuário
});