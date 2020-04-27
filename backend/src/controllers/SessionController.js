const connection = require ('../database/connection'); //importando conexão com o banco

module.exports = {
    async login (request, response) { //método get
        const email = request.query;

        try{
            const usuario = await connection('usuarios') //buscar o usuario indicado
            .where(email) // autenticação
            .select('*') // dado a ser retornado
      
            return response.json(usuario); //retornar usuário requisitado
            }
      
            catch(err){
              response.json({message:err}); //mensagem de erro
      }
    },
}