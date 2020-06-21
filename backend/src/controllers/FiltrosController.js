const connection = require('../database/connection')

module.exports = {
    async indexCidadeOrigem (request, response){
        const {origem} = request.body;

        try{
          const caronas = await connection ('caronas')
          .where('origem', origem)
          .select('*');

          return response.json (caronas);
        }
        catch(err){ 
            response.json({message:err});
        }
        //procura por cidade de origem
    },

    async indexCidadeDestino (request, response){
        const {destino} = request.body;

        try{
          const caronas = await connection ('caronas')
          .where('destino', destino)
          .select('*');

          return response.json (caronas);
        }
        catch(err){ 
            response.json({message:err});
        }
        //procura por cidade de destino
    },

    async indexHorario (request, response){
        const {hora, minuto} = request.body;

        try{
          const caronas = await connection ('caronas')
          .where('hora', hora)
          .where('minuto', minuto)
          .select('*');

          return response.json (caronas);
        }
        catch(err){ 
            response.json({message:err});
        }
        //procura por horário
    },

}