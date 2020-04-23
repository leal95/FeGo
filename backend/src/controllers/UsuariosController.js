const crypto = require ('crypto');
const connection = require ('../database/connection');

module.exports = {
    async index (request, response) {
        const usuarios = await connection('usuarios').select('*');

        return response.json(usuarios);
    },
    
    async create(request, response) {
        const { email, senha, ra, nome, sobrenome, numTelefone } = request.body;
    
        const id = crypto.randomBytes(4).toString('HEX');

        try{
            await connection('usuarios').insert({
                id,
                email,
                senha,
                ra,
                nome,
                sobrenome,
                numTelefone
                })

                response.json({id});
        }
        catch(err){
            response.json({message:err});
        }
    }
} 