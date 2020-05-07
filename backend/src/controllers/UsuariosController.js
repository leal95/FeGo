const connection = require ('../database/connection');

module.exports = {
    async index (request, response) { //método get
        const usuarios = await connection('usuarios').select('*'); //buscar tabela de usuários

        return response.json(usuarios); //retornar tabela
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