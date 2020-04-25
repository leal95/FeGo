const connection = require ('../database/connection'); //importando conexão com o banco

module.exports = {
    async create (request, response) {
      const { email } = request.body; //entrar com a informação do usuário

      try{
      const usuario = await connection('usuarios') //buscar o usuario indicado
      .where('email', email) // autenticação
      .select('nome') // dado a ser retornado
      .first() // retornar apenas um usuário

      return response.json(usuario); //retornar usuário requisitado
      }

      catch(err){
        response.json({message:err}); //mensagem de erro
}
}
}