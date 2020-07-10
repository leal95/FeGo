const connection = require('../database/connection')

module.exports = {
    async filtrarCaronas (request, response){
        if(request.query.origem && request.query.destino){
            const origem = request.query;
            const destino = request.query;
            try{
                const caronas = await connection ('caronas')
                .where('origem', origem)
                .where('destino', destino)
                .select('*');
      
                return response.json (caronas);
              }
              catch(err){ 
                  response.json({message:err});
              }
              //procura por cidade de origem
        }

        else{
            if(request.query.usuario_email){
                const usuario_email = request.query;
                try{
                    const caronas = await connection ('caronas')
                    .where('usuario_email', usuario_email)
                    .select('*');
          
                    return response.json (caronas);
                  }
                  catch(err){ 
                      response.json({message:err});
                  }
            }
        }
    },
}