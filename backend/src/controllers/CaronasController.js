const connection = require ('../database/connection');

module.exports = {
    async index (request, response) { //método get
        const caronas = await connection('caronas').select('*'); //buscar tabela de usuários

        return response.json(caronas); //retornar tabela
    },
    
    async create(request, response) { 
        const { origem, destino, hora, minuto, dia, mes, ano, usuario_email } = request.body;
        //const usuario_email = request.headers.authorization; //A chave que liga ao usuário será puxada pelo headers

        try{
            await connection('caronas').insert({ 
                origem, 
                destino, 
                hora, 
                minuto, 
                dia, 
                mes, 
                ano,
                usuario_email
                })

               return response.json({ origem, destino, hora, minuto, dia, mes, ano}); //inserindo carona no banco de dados
        }
        catch(err){ 
            return response.json({message:err});
        }
    },

    async delete (request, response) { //método delete
        
    }
}