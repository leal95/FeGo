const connection = require ('../database/connection');

module.exports = {
    async create (request, response) {
      const {id} = request.body;

      try{
      const usuario = await connection('usuarios')
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