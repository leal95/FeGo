const express = require ('express');
const UsuariosController = require ('./controllers/UsuariosController');
const routes = express.Router();

routes.get('/usuarios', UsuariosController.index);

routes.post('/usuarios', UsuariosController.create);

module.exports = routes;