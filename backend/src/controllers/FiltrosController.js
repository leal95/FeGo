const connection = require('../database/connection')

module.exports = {
    async filtrarCaronas (request, response){
        if(request.query.origem){
            const origem = request.query;
            try{
                const caronas = await connection ('caronas')
                .where(origem)
                .select('*');
      
                return response.json (caronas);
              }
              catch(err){ 
                  response.json({message:err});
              }
              //procura por cidade de origem
        }
        else{
            if(request.query.destino){
                const destino = request.query;
                try{
                    const caronas = await connection ('caronas')
                    .where(destino)
                    .select('*');
          
                    return response.json (caronas);
                  }
                  catch(err){ 
                      response.json({message:err});
                  }
                  //procura por cidade de destino
            }
        }
    },
}