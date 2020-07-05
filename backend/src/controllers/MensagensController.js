const connection = require ('../database/connection');

module.exports = {
    async mostrarMensagensPorUsuario (request, response) { //mostrar mensagens por usuario
        const { destinatario } = request.body;
        
        const mensagens = await connection('mensagens')
        .where('destinatario', destinatario)
        .select('mensagem'); 

        return response.json(mensagens); 
    },
    
    async create(request, response) { 
        const {mensagem, destinatario } = request.body;
        
        try{
            await connection('mensagens').insert({ 
                mensagem,
                destinatario
                })

               return response.json({ mensagem, destinatario}); //inserindo carona no banco de dados
        }
        catch(err){ 
            return response.json({message:err});
        }
    }
}    