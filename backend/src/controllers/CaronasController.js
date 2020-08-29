const connection = require ('../database/connection');

module.exports = {
    async index (request, response) { //método get
        const caronas = await connection('caronas').select('*'); //buscar tabela de usuários

        return response.json(caronas); //retornar tabela
    },
    
    async create(request, response) { 
        const { origem, encontro, destino, hora, minuto, dia, mes, ano, preco, dataMilissegundos,
            vagas, passageiros, obs, nome, email, modeloCarro, placaCarro } = request.body;
        //A chave que liga ao usuário será puxada pelo headers (método ideal)

        try{
            await connection('caronas').insert({ 
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

               return response.json({ origem, encontro, destino, hora, minuto, dia, mes, ano, dataMilissegundos, preco, 
                vagas, passageiros, obs, nome, email, modeloCarro, placaCarro }); //inserindo carona no banco de dados
        }
        catch(err){ 
            return response.json({message:err});
        }
    },

    async edit (request, response){
        const { id } = request.params;
        const { hora, minuto, dia, mes, ano, vagas, passageiros, listaEspera, obs } = request.body;

        try{
            await connection('caronas')
            .where('id', id)
            .update({
                hora, 
                minuto, 
                dia,
                mes,
                ano,
                vagas,
                passageiros,
                listaEspera,
                obs
                })

               return response.json({message: "Carona Alterada"}); //inserindo carona no banco de dados
        }
        catch(err){ 
            return response.json({message:err});
        }
    },

    async delete (request, response) { //método delete
        const { id } = request.params;
        
        try{
            await connection ('caronas').where('id', id).delete();

            return response.json({message: "Carona Deletada"})
        }
        catch(err){ 
            return response.json({message:err});
        }
    }
}