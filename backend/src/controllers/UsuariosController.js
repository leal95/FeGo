const connection = require ('../database/connection');

module.exports = {
    async index (request, response) { //método get
        const {email} = request.query;

        const usuarios = await connection('usuarios').where('email', email).select('*'); //buscar tabela de usuários

        return response.json(usuarios); //retornar tabela
    },

    async edit (request, response){
       
        const {email, ra, nome, sobrenome, numTelefone, apelido, fumante, curso, musica, modeloCarro, placaCarro, corCarro} = request.body;
        //Entrada de dados pelo usuário

        try{
            await connection('usuarios')
            .where('email', email)
            .update({
                ra,
                nome,
                sobrenome,
                numTelefone,
                apelido,
                fumante,
                curso,
                musica,
                modeloCarro,
                placaCarro,
                corCarro,
            }) // Atualiza o Banco de Dados com as informações fornecidas pelo usuário

            const usuarioAtualizado = await connection('usuarios').where('email', email).select('*'); //buscar tabela de usuários

            return response.json(usuarioAtualizado); //retornar usuário atualizado
        }
        catch(err){ 
            response.json({message: err});
        }

    },
    
    async create(request, response) { //método post
        const { email, senha, ra, nome, sobrenome, numTelefone } = request.body; //requisitando informações de cadastro

        try{
            await connection('usuarios').insert({ //inserir dados no banco
                email,
                senha,
                ra,
                nome,
                sobrenome,
                numTelefone
                })

                response.json({message:"Usuario Criado"}); //retornar resultado com os dados
        }
        catch(err){ //mensagem de erro
            response.json({message:err});
        }
    }
} 