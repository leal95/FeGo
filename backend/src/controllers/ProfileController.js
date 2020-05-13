const connection = require ('../database/connection'); //importando conexão com o banco

module.exports={
    async edit (request, response){
       
        const {email, senha, ra, nome, sobrenome, numTelefone, apelido, fumante, curso, musica} = request.body
        //Entrada de dados pelo usuário

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
            }) // Atualiza o Banco de Dados com as informações fornecidas pelo usuário

            const usuarioAtualizado = await connection('usuarios').select('*').where('email', email); //buscar tabela de usuários

            return response.json(usuarioAtualizado); //retornar usuário atualizado
        }
        catch(err){ //mensagem de erro
            response.json({message:err});
        }

    }
}