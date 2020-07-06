const connection = require ('../database/connection');

module.exports = {
    async index (request, response) { //método get
        const usuarios = await connection('usuarios').select('*'); //buscar tabela de usuários

        return response.json(usuarios); //retornar tabela
    },

    async edit (request, response){
       
        const {email, ra, nome, sobrenome, numTelefone, apelido, fumante, curso, musica,  modeloCarro, placaCarro} = request.body;
        //Entrada de dados pelo usuário

        try{
            const dados = await connection('usuarios')
            .where('email', email)
            .update({
                ra: ra,
                nome: nome,
                sobrenome: sobrenome,
                numTelefone: numTelefone,
                apelido: apelido,
                fumante: fumante,
                curso: curso,
                musica: musica,
                modeloCarro: modeloCarro,
                placaCarro: placaCarro,
            }) // Atualiza o Banco de Dados com as informações fornecidas pelo usuário

            const usuarioAtualizado = await connection('usuarios').select('*').where('email', email); //buscar tabela de usuários

            return response.json(usuarioAtualizado); //retornar usuário atualizado
        }
        catch(err){ 
            response.json({message:err});
        }

    },
    
    async create(request, response) { //método post
        const { email, senha, ra, nome, sobrenome, numTelefone } = request.body; //requisitando informações de cadastro
        const { apelido, fumante, curso, musica } = []


        try{
            await connection('usuarios').insert({ //inserir dados no banco
                email,
                senha,
                ra,
                nome,
                sobrenome,
                numTelefone,
                apelido,
                fumante,
                curso,
                musica
                })

                response.json({ email, senha, ra, nome, sobrenome, numTelefone, apelido, fumante, curso, musica }); //retornar resultado com os dados
        }
        catch(err){ //mensagem de erro
            response.json({message:err});
        }
    }
} 