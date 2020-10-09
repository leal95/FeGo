import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import { FlatList } from 'react-native-gesture-handler';
import api from '../../services/api'; 

export default function detalheCaronas() { 
    const route = useRoute();
    const navigation = useNavigation();

    const [infosMotorista, setInfosMotorista] = useState('');

    const [infosPassageiros, setInfosPassageiros] = useState([]);
    const [listaEspera, setListaEspera] = useState([]);

    const dados = route.params.dados;
    let paginaAnterior = (route.params.paginaAnterior) ? route.params.paginaAnterior : null;
    const infosCarona = route.params.infosCarona;

    let keyExtractorCounter = 0;
    let listaParaRenderizar = infosPassageiros.concat(listaEspera);

    function verifKeyExtractor(){
        keyExtractorCounter++;
        return `${keyExtractorCounter}`
    }

    async function getDadosDoMotorista() {
        const response = await api.get(`/sessions/?email=${infosCarona.email}`);

        setInfosMotorista(response.data);
    }

    async function getDadosDosPassageiros() {
        if(infosCarona.passageiros){
            let vetorDePassageiros = [];
            const emailPassageiros = infosCarona.passageiros.split(",");
        
            if(emailPassageiros){
                for(let i = 0; i<emailPassageiros.length;i++){
                    const response = await api.get(`/sessions/?email=${emailPassageiros[i]}`);

                    vetorDePassageiros.push(response.data[0]);
                }
                setInfosPassageiros(vetorDePassageiros);
            }
        }
        else return
    }

    async function getDadosDaListaEspera() {
        if(infosCarona.listaEspera){
            let vetorDePassageiros = [];
            const emailPassageiros = infosCarona.listaEspera.split(",");
        
            if(emailPassageiros){
                for(let i = 0; i<emailPassageiros.length;i++){
                    const response = await api.get(`/sessions/?email=${emailPassageiros[i]}`);

                    vetorDePassageiros.push(response.data[0]);
                }
                setListaEspera(vetorDePassageiros);
            }
        }
        else return
    }

    useEffect(() => {
        getDadosDoMotorista();
        getDadosDosPassageiros();
        getDadosDaListaEspera();
    }, [])

    function showCarona() {
        return (
        <View style={styles.Caronas} >
            <View style={styles.CaronasInfo}>
                <Text style={{color: '#ddd', alignSelf: 'center'}}> 
                    {infosCarona.dia} / {infosCarona.mes} / {infosCarona.ano} 

                    {(infosMotorista.email == dados.email) ? 
                    <TouchableOpacity  
                    onPress={() => editarCarona()}>
                        <Text style={styles.textPedirCarona}>Editar</Text>
                    </TouchableOpacity> 
                    :
                    null}

                </Text>

                <Text style={styles.CaronasText}> {infosCarona.origem}</Text>
                <Feather style={{alignSelf: 'center'}} name="arrow-down" size={20} color="#fff"/>
                <Text style={styles.CaronasText}>{infosCarona.destino.split(",")[0]}</Text>

                <Text style={{color: '#ddd', alignSelf: 'center', margin: 5}}> {infosCarona.hora}:{infosCarona.minuto} </Text>
                <Text style={{color: '#ddd', fontWeight: 'bold'}}> Paradas: {infosCarona.destino} </Text>

                <View style={styles.CaronasViewVP}>
                    <Text style={{color: '#ddd', fontWeight: 'bold'}}> Vagas: {infosCarona.vagas} </Text>
                    <Text style={{color: '#ddd', fontWeight: 'bold'}}> Preco: {infosCarona.preco} reais </Text>
                </View>
                <Text style={{color: '#ddd', alignSelf: 'center'}}>OBS: {infosCarona.obs}</Text>
            </View>
        </View>
        )
    }

    function showPerson(infos) {
        const terceiro = infos;

        navigation.navigate('VerPessoa', {terceiro})
    }

    function showMotorista() {
        return (
            <>
                <TouchableOpacity onPress={() => showPerson(infosMotorista)} style={{marginTop: 10}}>
                    <Text style={styles.text}>Motorista:</Text>
                    <Text style={styles.description}> {infosMotorista[0].nome} {infosMotorista[0].sobrenome} ({infosMotorista[0].apelido}) </Text>
                    <Text style={styles.description}> Modelo do Carro: {infosMotorista[0].modeloCarro}</Text>
                    <Text style={styles.description}> Placa do Carro: {infosMotorista[0].placaCarro}</Text>
                    <Text style={styles.description}> Cor do Carro: {infosMotorista[0].corCarro}</Text>
                    <Text style={styles.description}> Avaliacao: {(infosMotorista[0].notaDaAvaliacao) ?
                        `${infosMotorista[0].notaDaAvaliacao} / 5`
                        : "Ainda nao foi avaliado/a"}</Text>
                </TouchableOpacity>
            </>
        )
    }

    function showPassageiro(pessoa, index) {
        return (
            <View style={{marginBottom: 10}}>
                <TouchableOpacity onPress={() => showPerson(pessoa)}>
                    <Text style={styles.description}>{pessoa.nome} {pessoa.sobrenome} ({pessoa.apelido}) </Text>
                    <Text style={styles.description}> {(pessoa.notaDaAvaliacao) ?
                        `${pessoa.notaDaAvaliacao} / 5`
                        : "Ainda nao foi avaliado/a"}
                    </Text>
                </TouchableOpacity>

                {(!paginaAnterior && pessoa.email == dados.email) ?
                <TouchableOpacity onPress={() => removerPessoa(pessoa)} style={{backgroundColor: 'red'}}>
                    X
                </TouchableOpacity>
                :
                null}
                
                {(paginaAnterior && pessoa.email != dados.email) ?
                <View style={styles.avaliacaoView}>
                    <Text style={styles.description}>Avaliacao: </Text>
                    <TextInput
                    style={styles.inputText}
                    autoCorrect={false}
                    placeholder={definirPlaceholder(`passageiro${index}`)}
                    keyboardType='numeric'
                    returnKeyType="done"
                    onSubmitEditing={(e) => submitAvaliacao(e.nativeEvent.text, pessoa)}
                    />
                </View>:
                null}

            </View>
        )
    }

    function botoesSolicitarCarona() {
        if(infosCarona.vagas > 0){
            return (
                <>
                    <TouchableOpacity 
                    style={styles.botaoPedirCarona} 
                    onPress={() => solicitarCarona()}>
                        <Text style={styles.textPedirCarona}>Pedir Carona</Text>
                    </TouchableOpacity> 
                </>
            );
        }
        else{
            return (
                <TouchableOpacity 
                style={styles.botaoEsperaCarona} 
                onPress={() => colocarEmEspera()}>
                    <Text style={styles.textEsperaCarona}>Aguardar Vaga</Text>
                </TouchableOpacity> 
            );
        }
    }

    async function solicitarCarona() {
        const pedido = ({
            mensagem: `Olá ${infosMotorista[0].nome}, me chamo ${dados.nome}
Eu gostaria de pegar a carona contigo na data: ${infosCarona.dia} / ${infosCarona.mes} / ${infosCarona.ano} às ${infosCarona.hora}:${infosCarona.minuto}`,
            destinatarioEmail: infosCarona.email,
            destinatarioNome: infosMotorista[0].nome,
            emissarioEmail: dados.email,
            emissarioNome: dados.nome,
            idCarona: infosCarona,
        })

        try{
            await api.post(`/usuarios/mensagens`, pedido);
            
            colocarEmEspera();
        }
        catch(err){
            alert('Erro ao fazer alteração das informações!');
        };
    }

    async function colocarEmEspera() {
        const info = ({
            listaEspera: [infosCarona.listaEspera, dados.email].join(),
        });

        try{
            await api.put(`/caronas/${infosCarona.id}`, info);

            alert(`Você foi inserido(a) na lista de espera, caso ainda tenha vagas basta esperar a resposta do motorista.
            Se não, assim que uma delas for liberada sua solicitação vai ser enviada ao/à motorista. 
Agora é só esperar!`);

            navigation.navigate('TelaInicial');
        }
        catch(err){
            alert('Erro ao fazer alteração das informações!');
        };
    }

    async function removerPessoa(infos) {
        let passageiros = "";

        if(carona.passageiros){
            passageiros = infosCarona.passageiros.replace(`${infos.email},`, "")   
        }

        const aviso = ({
            estado: "Respondida",
            desinatarioEmail: infosMotorista.email,
            desinatarioNome: infosMotorista.nome,
            emissarioEmail: dados.email,
            emissarioNome: dados.nome,
            mensagem: `Olá, eu gostaria de avisar que tive que sair da carona, me desculpe por qualquer transtorno que isso venha a causar`
        })

        const info = ({
            passageiros,
            vagas: infosCarona.vagas + 1,
        });

        try{
            await api.put(`/caronas/${infosCarona.idCarona}`, info);

            await api.post(`/usuarios/mensagens`, aviso);

            alert(`Você foi removido da carona e o/a motorista já foi notificado`);
        }
        catch(err){
            alert('Ocorreu um erro tente novamente mais tarde');
        };
    }

    function definirPlaceholder(parametro) {
        let retorno = "";

        if(infosCarona.avaliacoes){
            if(infosCarona.avaliacoes[`${dados.email}`][`${parametro}`]){
                retorno = infosCarona.avaliacoes[`${dados.email}`][`${parametro}`]
            }
        }
        else{
            retorno = "(0-5)"
        }

        return retorno
    }

    function configurandoObjeto(email, value){
        let avaliacaoColetiva = {};
        let avaliacaoIndividual = {
            [email]: value
        };

        if(infosCarona.avaliacoes){
            avaliacaoColetiva = infosCarona.avaliacoes;
        }

        avaliacaoColetiva = ({...avaliacaoColetiva, [`${dados.email}`]: avaliacaoIndividual})

        return avaliacaoColetiva;
    }

    function calculandoNovaNota(valor, dadosDaPessoa) {
        let objeto = {};
        let denominador, numerador;

        if(dadosDaPessoa.avaliadores){
            if(dadosDaPessoa.avaliadores.indexOf(dados.email) > -1){
                objeto = {
                    notaDaAvaliacao: dadosDaPessoa.notaDaAvaliacao,
                    avaliadores: dadosDaPessoa.avaliadores,
                }
                return objeto;
            }
            else{
                denominador = dadosDaPessoa.avaliadores.split(",").length;
                numerador = dadosDaPessoa.notaDaAvaliacao*denominador + valor;
                numerador = numerador / denominador++;

                objeto = {
                    notaDaAvaliacao: numerador,
                    avaliadores: [dadosDaPessoa.avaliadores, dados.email].join(),
                }

                return objeto;
            }
        }
        else{
            objeto = {
                notaDaAvaliacao: valor,
                avaliadores: dados.email,
            }
            return objeto;
        }
    }

    async function submitAvaliacao(value, dadosDaPessoa){
        if(value >= 0 && value <= 5){

            let avaliacaoColetiva = configurandoObjeto(dadosDaPessoa.email, value);

            let novaAvaliacaoDoUsuario = calculandoNovaNota(value, dadosDaPessoa)

            const info = ({
                avaliacoes: avaliacaoColetiva,
            })

            const usuarioAvaliado = ({
                email: dadosDaPessoa.email,
                avaliadores: novaAvaliacaoDoUsuario.avaliadores,
                notaDaAvaliacao: novaAvaliacaoDoUsuario.notaDaAvaliacao,
            })
    
            try{
                await api.put(`/historico/${infosCarona.id}`, info);

                await api.put('/usuarios', usuarioAvaliado);

                alert(`${dadosDaPessoa.nome} foi avaliado/a com sucesso! Obrigado!`)
            }
            catch(err){
                alert('Erro ao fazer avaliação do usuário/a!');
            };
        }
        else{
            alert(`O valor informado para a avaliação deve estar entre 0 e 5, por favor preste atenção.
            Caso você tenha inserido um valor correto, podemos estar diante de um bug`)
        }
    }

    function editarCarona() {
        navigation.navigate('PublicarCarona', {dados, infosCarona})
    }
    
    return(
        <View style={styles.container}>
            <Feather name="arrow-left" style={{marginBottom: 10}} size={30} color="#858585" onPress = {navigation.goBack}/>

            <FlatList
                ListHeaderComponent={
                    <>
                        {showCarona()}

                        {(infosMotorista) ?
                        showMotorista()
                        :
                        null}

                        {(paginaAnterior && dados.email != infosCarona.email) ?
                        <View style={styles.avaliacaoView}>
                            <Text style={styles.description}>Avaliacao: </Text>
                            <TextInput
                            style={styles.inputText}
                            autoCorrect={false}
                            placeholder={definirPlaceholder(infosMotorista[0])}
                            keyboardType='numeric'
                            returnKeyType="done"
                            onSubmitEditing={(e) => submitAvaliacao(e.nativeEvent.text, infosMotorista[0])}
                            />
                        </View>:
                        null}

                        <Text style={styles.text}>Passageiro(s):</Text>
                    </>
                }
                data = {listaParaRenderizar}
                keyExtractor={verifKeyExtractor()}
                showsVerticalScrollIndicator = {false}
                renderItem = {({item: pessoa, index})=>(
                    (pessoa && index < infosPassageiros.length-1) ?
                    <>
                        {showPassageiro(pessoa, index)}
                    </>
                    :
                    (pessoa && index === infosPassageiros.length-1) ?
                    <>
                        {showPassageiro(pessoa, index)}

                        <Text style={styles.text}>Lista de Espera:</Text>
                    </>
                    :
                    (pessoa) ?
                    <View style={{marginVertical: 10}}>
                        <Text style={styles.description}>{pessoa.nome} {pessoa.sobrenome} ({pessoa.apelido}) </Text>
                    </View>
                    :
                    null
                )}
                ListFooterComponent={
                    <>
                        {(paginaAnterior) ?
                        null :
                        botoesSolicitarCarona()}
                    </>
                }
                />
        </View>
    )
}