const connection = require ('../database/connection');

module.exports = {
    async index (request, response) { //método get
        const caronas = await connection('caronas').select('*'); //buscar tabela de usuários

        return response.json(caronas); //retornar tabela
    },
    
    async create(request, response) { 
        const { origem, destino, hora, minuto, dia, mes, ano } = request.body;
        const usuario_email = request.headers.authorization;


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

               return response.json({ origem, destino, hora, minuto, dia, mes, ano});
        }
        catch(err){ 
            return response.json({message:err});
        }
    }
}