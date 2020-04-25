const express = require ('express');
const UsuariosController = require ('./controllers/UsuariosController');
const SessionController = require ('./controllers/SessionController');

const routes = express.Router(); //desacoplando Router do express e alocando na nova variável

routes.get('/usuarios', UsuariosController.index); //listagem
routes.post('/usuarios', UsuariosController.create); //cadastro
routes.post('/session', SessionController.create); //login

module.exports = routes;