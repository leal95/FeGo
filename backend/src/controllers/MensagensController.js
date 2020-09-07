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
        const {estado, mensagem, destinatarioEmail, destinatarioNome, emissarioEmail, emissarioNome, idCarona } = request.body;
        
        try{
            await connection('mensagens').insert({ 
                estado,
                mensagem,
                destinatarioEmail,
                destinatarioNome,
                emissarioEmail,
                emissarioNome,
                idCarona,
                })

               return response.json("Mensagem criada"); //inserindo mensagens no banco de dados
        }
        catch(err){ 
            return response.json({message:err});
        }
    },

    async edit (request, response){
       
        const {id, estado, mensagem, destinatarioEmail, destinatarioNome, emissarioEmail, emissarioNome, idCarona } = request.body;
        //Entrada de dados pelo usuário

        try{
            await connection('mensagens')
            .where('id', id)
            .update({
                estado,
                mensagem,
                destinatarioEmail,
                destinatarioNome,
                emissarioEmail,
                emissarioNome,
                idCarona,
            }) // Atualiza o Banco de Dados com as informações fornecidas pelo usuário

            return response.json("Mensagem alterada"); //retornar usuário atualizado
        }
        catch(err){ 
            response.json({message: err});
        }

    },
}    