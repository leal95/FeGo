const connection = require ('../database/connection'); //importando conexão com o banco

module.exports={
    async edit (request, response){
       
        const { emailLogin, senhaMod, raMod, nomeMod, sobrenomeMod, numTelefoneMod, apelidoMod, fumanteMod, cursoMod, musicaMod } = request.body;

        try{
            await connection('usuarios')
            .where(email, {emailLogin})
            .update({
                senha: {senhaMod},
                ra: {raMod},
                nome: {nomeMod},
                sobrenome: {sobrenomeMod},
                numTelefone: {numTelefoneMod},
                apelido: {apelidoMod},
                fumante: {fumanteMod},
                curso: {cursoMod},
                musica: {musicaMod}
            })
          
            response.json({ email, senha, ra, nome, sobrenome, numTelefone, apelido, fumante, curso, musica });
        }
        catch(err){ //mensagem de erro
            response.json({message:err});
        }

    }
}