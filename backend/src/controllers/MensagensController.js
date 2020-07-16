const connection = require ('../database/connection');

module.exports = {
    async mostrarMensagensPorUsuario (request, response) { //mostrar mensagens por usuario
        const { destinatarioEmail } = request.query; //destinatario = email
        
        const mensagens = await connection('mensagens')
        .where('destinatarioEmail', destinatarioEmail)
        .select('*'); 

        return response.json(mensagens); 
    },
    
    async create(request, response) { 
        const {mensagem, destinatarioEmail, destinatarioNome, emissarioEmail, emissarioNome } = request.body;
        
        try{
            await connection('mensagens').insert({ 
                mensagem,
                destinatarioEmail,
                destinatarioNome,
                emissarioEmail,
                emissarioNome,
                })

               return response.json({ mensagem, destinatarioEmail, destinatarioNome, emissarioEmail, emissarioNome}); //inserindo mensagens no banco de dados
        }
        catch(err){ 
            return response.json({message:err});
        }
    }
}    