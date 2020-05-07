const connection = require ('../database/connection'); //importando conexão com o banco

module.exports = {
    async login (request, response) { //método get
        const {emailEntrada} = request.body;

        try{
            const usuario = await connection('usuarios') //buscar o usuario indicado
            .where('email', emailEntrada) // autenticação
            .select('nome') // dado a ser retornado
      
            return response.json(usuario); //retornar usuário requisitado
            }
      
            catch(err){
              response.json({message:err}); //mensagem de erro
      }
    },
}