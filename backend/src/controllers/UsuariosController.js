const crypto = require ('crypto');
const connection = require ('../database/connection');

module.exports = {
    async index (request, response) { //método get
        const usuarios = await connection('usuarios').select('*'); //buscar tabela de usuários

        return response.json(usuarios); //retornar tabela
    },
    
    async create(request, response) { //método post
        const { email, senha, ra, nome, sobrenome, numTelefone } = request.body; //requisitando informações de cadastro
    
        const id = crypto.randomBytes(4).toString('HEX'); //gerando id

        try{
            await connection('usuarios').insert({ //inserir dados no banco
                id,
                email,
                senha,
                ra,
                nome,
                sobrenome,
                numTelefone
                })

                response.json({ email, senha, ra, nome, sobrenome, numTelefone }); //retornar resultado com os dados
        }
        catch(err){ //mensagem de erro
            response.json({message:err});
        }
    }
} 