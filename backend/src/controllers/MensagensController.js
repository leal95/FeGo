const connection = require ('../database/connection');

module.exports = {
    async mostrarMensagensPorUsuario (request, response) { //mostrar mensagens por usuario
        const { destinatario } = request.body; //destinatario = email
        
        const mensagens = await connection('mensagens')
        .where('destinatario', destinatario)
        .select('mensagem'); 

        return response.json(mensagens); 
    },
    
    async create(request, response) { 
        const {mensagem, destinatario, emissario } = request.body;
        
        try{
            await connection('mensagens').insert({ 
                mensagem,
                destinatario,
                emissario
                })

               return response.json({ mensagem, destinatario}); //inserindo mensagens no banco de dados
        }
        catch(err){ 
            return response.json({message:err});
        }
    }
}    