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

        if(request.query.date){
            try{
                const date = request.query.data.split(" ");
                const dia = date[0];
                const mes = date[1];
                const hora = date[2];
                const minuto = date[3];

                const caronas = await connection ('caronas')
                .where(dia)
                .where(mes)
                .where(hora)
                .where(minuto)
                .select('*');

                console.log(caronas);
        
                return response.json (caronas);
                }
            catch(err){ 
                response.json({message:err});
            }
                //procura por horario de saida
        }
    },
}