const connection = require ('../database/connection'); //importando conexão com o banco

module.exports={
    async edit (request, response){
       
        const {email, senha, ra, nome, sobrenome, numTelefone, apelido, fumante, curso, musica} = request.body

        try{
            const dados = await connection('usuarios')
            .where('email', email)
            .update({
                ra,
                nome,
                sobrenome,
                numTelefone,
                apelido,
                fumante,
                curso,
                musica,
            })

            response.json(dados);
        }
        catch(err){ //mensagem de erro
            response.json({message:err});
        }

    }
}