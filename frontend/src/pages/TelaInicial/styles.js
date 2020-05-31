import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    botaoCarona: {
        backgroundColor: '#347EBF',
        borderRadius: 15,
        height: 50,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center'
    }, //Estilos dos dois botões do fim da página ("Oferecer carona" e "Procurar Carona")

    botoesCaronas: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },  //posição dos botões do fim da página

    botaoInicialAzul: {
        borderColor: '#F2CA04',
        borderRadius: 25,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#347EBF',
    }, //estilos dos dois botões redondos azuis (do carrinho e de histórico)

    botaoInicialAmarelo: {
        borderColor: '#347EBF',
        borderRadius: 25,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F2CA04',
    }, //estilos dos dois botões redondos amarelos (Engrenagem e mensagem)

    botoesIniciais: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    }, //Posição dos botões redondos

    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: Constants.statusBarHeight + 15,
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
        borderWidth: 2,
        borderRadius: 50,
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#aaa',
    }, //estilo da foto de perfil

    userName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#999',
    } //estilo da fonte para o nome do usuário
});