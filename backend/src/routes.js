const express = require ('express');
const UsuariosController = require ('./controllers/UsuariosController');
const ProfileController = require ('./controllers/ProfileController');
const SessionController = require ('./controllers/SessionController'); //importando express e controllers

const routes = express.Router(); //desacoplando Router do express e alocando na nova variável

routes.put('/profile', ProfileController.edit); //editar perfil
routes.get('/sessions', SessionController.login); //login 
routes.get('/usuarios', UsuariosController.index); //listagem
routes.post('/usuarios', UsuariosController.create); //cadastro

module.exports = routes;