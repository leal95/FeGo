const connection = require('../database/connection')

module.exports = {
    async filtrarCaronas (request, response){
        if(request.query.origem && request.query.destino){
            const {origem, destino} = request.query;
            try{
                const caronas = await connection ('caronas')
                .where('origem', origem)
                .select('*');
                
                var caronasFiltradas = [];

                caronas.map((element) => {
                    if(element.destino.split(",")[0] == destino){
                        caronasFiltradas.push(element);
                    }
                })
      
                return response.json (caronasFiltradas);
              }
              catch(err){ 
                  response.json({message:err});
              }
              //procura por cidade de origem
        }

        else{
            if(request.query.email){
                const email = request.query;
                try{
                    const caronas = await connection ('caronas')
                    .where('email', email)
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