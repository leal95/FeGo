const connection = require('../database/connection')

module.exports = {
    async filtrarCaronas (request, response){
        if(request.query.origem && request.query.destino){
            const origem = request.query;
            const destino = request.query;
            console.log(origem, destino)
            try{
                const caronas = await connection ('caronas')
                .where(origem)
                .where(destino)
                .select('*');
      
                return response.json (caronas);
              }
              catch(err){ 
                  response.json({message:err});
              }
              //procura por cidade de origem
        }

        else{
            if(request.query.email){
                const usuario_email = request.query;
                console.log(usuario_email);
                try{
                    const caronas = await connection ('caronas')
                    .where(usuario_email)
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