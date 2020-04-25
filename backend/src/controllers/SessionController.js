const connection = require ('../database/connection');

module.exports = {
    async create (request, response) {
      const {id} = request.body; //verificar se o usuário existe

      try{
      const usuario = await connection('usuarios') //buscar o usuario indicado
      .where('id', id)
      .select('email')
      .first()

      return response.json(usuario);
      }

      catch(err){
        response.json({message:err});
}
}
}