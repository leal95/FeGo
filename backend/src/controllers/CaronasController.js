const connection = require ('../database/connection');

module.exports = {
    async index (request, response) { //método get
        const caronas = await connection('caronas').select('*'); //buscar tabela de usuários

        return response.json(caronas); //retornar tabela
    },
    
    async create(request, response) { 
        const { origem, destino, hora, minuto, dia, mes, ano, usuario_email } = request.body;
        //const usuario_email = request.headers.authorization; //A chave que liga ao usuário será puxada pelo headers (método ideal)

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
        const { id } = request.params;
        const { usuario_email } = request.body; //ideal seria usar o authorization, mas para fins de teste, request body também funciona
        
        try{
        const carona = await connection('caronas')
                       .where('id, id')
                       .select('usuario_email')
                       .first();
            
            await connection ('caronas').where('id', id).delete;

            
        }
        catch(err){ 
            return response.json({message:err});
        }
    }
}