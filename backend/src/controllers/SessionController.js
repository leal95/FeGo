const connection = require ('../database/connection'); //importando conexão com o banco

module.exports = {
    async login (request, response) {
      const { emailEntrada } = request.body; //entrar com a informação do usuário

      try{
      const usuario = await connection('usuarios') //buscar o usuario indicado
      .where('email', emailEntrada) // autenticação
      .select('nome') // dado a ser retornado
      .first() // retornar apenas um usuário

      return response.json(usuario); //retornar usuário requisitado
      }

      catch(err){
        response.json({message:err}); //mensagem de erro
}
}
}