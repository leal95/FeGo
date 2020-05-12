const connection = require ('../database/connection'); //importando conexão com o banco

module.exports={
    async edit (request, response){
       
        const {email, senha, ra, nome, sobrenome, numTelefone, apelido, fumante, curso, musica} = request.body

        try{
            const dados = await connection('usuarios')
            .where('email', email)
            .update({
                senha: senha,
                ra: ra,
                nome: nome,
                sobrenome: sobrenome,
                numTelefone: numTelefone,
                apelido: apelido,
                fumante: fumante,
                curso: curso,
                musica: musica
            })

            console.log('Chegou no try');

            response.json(dados);
        }
        catch(err){ //mensagem de erro
            response.json({message:err});
        }

    }
}