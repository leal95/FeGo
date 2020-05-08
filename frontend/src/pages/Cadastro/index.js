import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';

import styles from './styles';
import api from '../../services/api';

export default function Cadastro() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [ra, setRA] = useState('');
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [numTelefone, setNumTelefone] = useState('');
    const [confirmacao, setConfirmacao] = useState('');

    const navigation = useNavigation();

    function navigateToLogin() {
        navigation.navigate('Login');
    };

    function displayTOS () {
        Alert.alert(`Bem Vindo ao FeGo`, ` 
        Os serviços oferecidos nessa plataforma são fornecidos pelos programadores da Computer Society IEEE - Guaratinguetá.
        
        Ao usar nossos Serviços, você está concordando com estes termos. Leia-os com atenção.
        
        
        Uso da plataforma
        
        Não faça uso indevido de nossos Serviços. Por exemplo, não interfira com nossos Serviços nem tente acessá-los por um método diferente da interface e das instruções que fornecemos. Você pode usar nossos serviços somente conforme permitido por lei, inclusive leis e regulamentos de controle de exportação e reexportação. Podemos suspender ou deixar de fornecer nossos Serviços se você descumprir nossos termos ou políticas.
        
        O uso de nossos Serviços não lhe confere a propriedade sobre direitos de propriedade intelectual sobre os nossos Serviços ou sobre o conteúdo que você acessar. Você não pode usar conteúdos de nossos Serviços a menos que obtenha permissão do proprietário de tais conteúdos ou que o faça por algum meio permitido por lei.
        
        Para proteger sua Conta FeGo, o usuário deve manter a senha em sigilo. A atividade realizada na conta ou por seu intermédio é de responsabilidade do usuário. Não recomendamos que a senha seja reutilizada em aplicativos de terceiros. Caso tome conhecimento de uso não autorizado da sua senha ou conta, o usuário deve entrar em contato com os administradores.
        
        
        Privacidade
        
        Ao utilizar essa plataforma o usuário concorda em permitir que o FeGo utilize os dados que o usuário informar na navegação de modo a poder estabelecer dados estatísticos, feedbacks além de possíveis otimizações no serviço.
        
        
        Responsabilidade
        
        Exceto quando expressamente previsto nestes termos ou em termos adicionais, o FeGo não oferece qualquer garantia sobre os Serviços. Por exemplo, não nos responsabilizamos pelos conteúdos nos Serviços, por funcionalidades específicas dos Serviços, ou pela confiabilidade, disponibilidade ou capacidade de atender suas necessidades.
        
        O FeGo não será responsável por perda de lucros, perda de receita, perda de dados, perdas financeiras ou por danos indiretos, especiais, consequenciais, exemplares ou punitivos.
        
        Se você estiver usando nossos Serviços em nome de uma empresa, tal empresa aceita estes termos. Ela isentará de responsabilidade e indenizará o FeGo e todos os afetados de qualquer reivindicação, processo ou ação judicial proveniente de ou relacionado ao uso dos Serviços ou à violação destes termos, incluindo qualquer responsabilidade ou despesa resultante de reivindicações, perdas, danos, processos, julgamentos, custos de litígio e honorários advocatícios.
        
        Caso você não cumpra estes termos e nós não tomemos providências imediatas, isso não significa que estamos renunciando a quaisquer direitos que possamos ter (como tomar providências futuras).
        
        Sobre
        
        Podemos modificar estes termos ou quaisquer termos adicionais que sejam aplicáveis a um Serviço para, por exemplo, refletir alterações da lei ou mudanças em nossos Serviços. Alterações a respeito de novas funcionalidades de um Serviço ou alterações feitas por razões legais entrarão em vigor imediatamente. Se você não concordar com os termos alterados de um Serviço, deve descontinuar o uso desse Serviço.
        `)
    }

    async function cadastrarUsuario() {
        
        const info = ({
            email,
            senha,
            ra,
            nome, 
            sobrenome,
            numTelefone,
        });

        if(confirmacao === senha){
            try{
                await api.post('/usuarios', info);
    
                alert('Conta criada com sucesso');
    
                navigateToLogin();
            }
            catch(err){
                alert('Erro ao fazer cadastro!');
            };
        }

        else{
            alert("As senhas digitadas não são correspondentes");
        }
    };

    return(
        <View style={styles.container}>
            <Feather name="arrow-left" size={24} color="#999" onPress={navigateToLogin} />
            <View style={styles.header}>
                <Text style={styles.headerText}>Crie sua conta</Text>
            </View>

            
            <View style={styles.inputs}>
                <ScrollView showsVerticalScrollIndicator={false}>

                <TouchableOpacity 
                        onPress={() => displayTOS()}>
                            <Text style={styles.tosText}>
                                Ao cadastrar você admite  que está ciente e aceita os Termos e Condições de Serviço do FeGoApp
                                (clique para ler)
                            </Text>
                        </TouchableOpacity>

                    <Text style={styles.inputTextHeader}></Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Nome"
                        autoCorrect={false}
                        value={nome}
                        onChangeText={setNome}
                        autoCapitalize='none'
                    />

                    <Text style={styles.inputTextHeader}></Text>
                    <TextInput
                        style={styles.inputText} 
                        placeholder="Sobrenome"
                        autoCorrect={false}
                        value={sobrenome}
                        onChangeText={setSobrenome}
                        autoCapitalize='none'
                        />

                    <Text style={styles.inputTextHeader}></Text>
                    <TextInput
                        style={styles.inputText} 
                        placeholder="Email"
                        autoCorrect={false}
                        value={email}
                        onChangeText={setEmail}
                        autoCapitalize='none'
                        />

                    <Text style={styles.inputTextHeader}></Text>
                    <TextInput
                        style={styles.inputText} 
                        placeholder="Numero de Telefone (somente numeros)"
                        autoCorrect={false}
                        keyboardType="numeric"
                        value={numTelefone}
                        onChangeText={setNumTelefone}
                        />

                    <Text style={styles.inputTextHeader}></Text>
                    <TextInput
                        style={styles.inputText} 
                        placeholder="RA"
                        autoCorrect={false}
                        keyboardType="numeric"
                        value={ra}
                        onChangeText={setRA}
                        />
                    
                    <Text style={styles.inputTextHeader}></Text>
                    <TextInput
                        style={styles.inputText} 
                        placeholder="Senha"
                        autoCorrect={false}
                        value={senha}
                        onChangeText={setSenha}
                        autoCapitalize='none'
                        />

                    <Text style={styles.inputTextHeader}></Text>
                    <TextInput
                        style={styles.inputText} 
                        placeholder="Confirme sua senha"
                        autoCorrect={false}
                        value={confirmacao}
                        onChangeText={setConfirmacao}
                        autoCapitalize='none'
                        />
                </ScrollView>
            </View>

            <View style={styles.botoes}>
                <TouchableOpacity 
                style={styles.botaoCadastrar} 
                onPress={() => cadastrarUsuario()}>
                    <Text style={styles.botaoCadastrarText}>Concluir Cadastro</Text>
                </TouchableOpacity>
                
            </View>

            <View style={styles.textosfinais}>

                <Text style={styles.textoLogin}> Já possui conta?  </Text>

                <TouchableOpacity 
                style={styles.botaoLogin}
                onPress={navigateToLogin}>
                    <Text style={styles.botaoLoginText}>Login</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}