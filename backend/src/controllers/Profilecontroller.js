const connection = require ('../database/connection'); //importando conexão com o banco

module.exports={
    async edit (request, response){
       
        const {emailLogin} = request.body;

        const {senhaMod} = request.body;
        const {raMod} = request.body;
        const {nomeMod} = request.body;
        const {sobrenomeMod} = request.body;
        const {numTelefoneMod} = request.body;
        const {apelidoMod} = request.body;
        const {fumanteMod} = request.body;
        const {cursoMod} = request.body;
        const {musicaMod} = request.body; //requisitando dados de mudança
        //dúvida: request.body indica obrigação de inserir os dados?

        if ({senhaMod} == null)
            senhaMod = connection('usuario').where('email', emailLogin).select('senhaMod');

        if ({raMod} == null)
            raMod = connection('usuario').where('email', emailLogin).select('raMod');    

        if ({nomeMod} == null)
            nomeMod = connection('usuario').where('email', emailLogin).select('nomeMod');

        if ({sobrenomeMod} == null)
            sobrenomeMod = connection('usuario').where('email', emailLogin).select('sobrenomeMod');
            
        if ({numTelefoneMod} == null)
            numTelefoneMod = connection('usuario').where('email', emailLogin).select('numTelefoneMod');

        if ({apelidoMod} == null)
            apelidoMod = connection('usuario').where('email', emailLogin).select('apelidoMod');

        if ({fumanteMod} == null)
            fumanteMod = connection('usuario').where('email', emailLogin).select('fumanteMod'); 
            
        if ({cursoMod} == null)
            cursoMod = connection('usuario').where('email', emailLogin).select('cursoMod');

        if ({musicaMod} == null)
            musicaMod = connection('usuario').where('email', emailLogin).select('musicaMod');

        //Testes para, caso o usuário não inserir informações, definir a variável como a mesma já existente na tabela
        //Possível fonte de erro    
        
        try{
            await connection('usuarios').where('email',email).update({
                email: emailMod,
                senha: senhaMod,
                ra: raMod,
                nome: nomeMod,
                sobrenome: sobrenomeMod,
                apelido: apelidoMod,
                fumante: fumanteMod,
                curso: cursoMod,
                musica: musicaMod,
                numTelefone: numTelefoneMod,
                apelido: apelidoMod,
                fumante: fumanteMod,
                curso: cursoMod,
                musica: musicaMod
            })
            //Update dos campos: coerente ao visto na documentação do Knex
            
            response.json({ email, senhaMod, raMod, nomeMod, sobrenomeMod, numTelefoneMod, apelidoMod, fumanteMod, cursoMod, musicaMod});
        }
        catch(err){ //mensagem de erro
            response.json({message:err});
        }

    }
}