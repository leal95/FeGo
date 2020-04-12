const express = require ('express');
const crypto = require ('crypto');

const connection = require ('./database/connection');

const routes = express.Router();

routes.get('/usuarios', async(request, response) => {
    const usuarios = await connection('usuarios').selection('*');

    return response.json(usuarios);
});

routes.post('/usuarios', async (request, response) => {
    const { email, senha, ra, termos} = request.body;
    
    const id = crypto.randomBytes(4).toString('HEX');

   await connection('usuarios').insert({
        email,
        senha,
        ra,
        termos
    })

    if (termos == true) //teste se o usuário aceitou os termos
     return response.json({id});

});

module.exports = routes;