const connection = require ('../database/connection'); //importando conexão com o banco

module.exports={
    async edit (request, response){
       
        const {email} = request.body
        const {senha} = request.body;
        const {ra} = request.body;
        const {nome} = request.body;
        const {sobrenome} = request.body;
        const {numTelefone} = request.body;
        const {apelido} = request.body;
        const {fumante} = request.body;
        const {curso} = request.body;
        const {musica} = request.body; //requisitando dados de mudança

        try{
            await connection('usuarios')
            .where('email', {email})
            .update({
                senha: {senha},
                ra: {ra},
                nome: {nome},
                sobrenome: {sobrenome},
                numTelefone: {numTelefone},
                apelido: {apelido},
                fumante: {fumante},
                curso: {curso},
                musica: {musica}
            })
            response.json({ email, senha, ra, nome, sobrenome, numTelefone });
        }
        catch(err){ //mensagem de erro
            response.json({message:err});
        }

    }
}