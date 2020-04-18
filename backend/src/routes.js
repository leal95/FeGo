const express = require ('express');
const crypto = require ('crypto');

const connection = require ('./database/connection');

const routes = express.Router();

routes.get('/usuarios', async(request, response) => {
    const usuarios = await connection('usuarios').selection('*');

    return response.json(usuarios);
});

routes.post('/usuarios', async (request, response) => {
    const { email, senha, ra} = request.body;
    
    const id = crypto.randomBytes(4).toString('HEX');

   await connection('usuarios').insert({
        id,
        email,
        senha,
        ra
    })

     return response.json({id});

});

module.exports = routes;