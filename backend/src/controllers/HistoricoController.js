const connection = require ('../database/connection');

module.exports = {
    async index (request, response) { //método get
        const caronas = await connection('caronasPassadas').select('*'); //buscar tabela de usuários

        return response.json(caronas); //retornar tabela
    },
    
    async create(request, response) { 
        const { origem, encontro, destino, hora, minuto, dia, mes, ano, preco, dataMilissegundos,
            vagas, passageiros, obs, nome, email, modeloCarro, placaCarro } = request.body;
        //A chave que liga ao usuário será puxada pelo headers (método ideal)

        try{
            await connection('caronasPassadas').insert({ 
                origem: origem, 
                encontro: encontro,
                destino: destino,
                hora: hora, 
                minuto: minuto, 
                dia: dia,
                mes: mes,
                ano: ano,
                dataMilissegundos: dataMilissegundos,
                preco: preco,
                vagas: vagas,
                passageiros: passageiros,
                obs: obs,
                nome: nome,
                email: email,
                modeloCarro: modeloCarro,
                placaCarro: placaCarro, 
                })

               return response.json("Carona adicionada ao Histórico"); //inserindo carona no banco de dados
        }
        catch(err){ 
            return response.json({message:err});
        }
    },

    async delete (request, response) { //método delete
        const { id } = request.params;
        
        try{
            await connection ('caronas').where('id', id).delete();
        }
        catch(err){ 
            return response.json({message:err});
        }
    }
}