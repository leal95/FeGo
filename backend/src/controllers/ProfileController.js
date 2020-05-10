const connection = require ('../database/connection'); //importando conexão com o banco

module.exports={
    async edit (request, response){
       
        const {email, senha, ra, nome, sobrenome, numTelefone, apelido, fumante, curso, musica} = request.body

        try{
            await connection('usuarios')
            .where('email', {email})
            .update({
                senha,
                ra,
                nome,
                sobrenome,
                numTelefone,
                apelido,
                fumante,
                curso,
                musica,
            })

            response.json({ email, senha, ra, nome, sobrenome, numTelefone, apelido, fumante, curso, musica });
        }
        catch(err){ //mensagem de erro
            response.json({message:err});
        }

    }
}