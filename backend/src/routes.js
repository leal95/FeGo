const express = require ('express');
const UsuariosController = require ('./controllers/UsuariosController');
const ProfileController = require ('./controllers/ProfileController');
const SessionController = require ('./controllers/SessionController');
const CaronasController = require ('./controllers/CaronasController'); //importando express e controllers
const FiltrosController = require ('./controllers/FiltrosController');

const routes = express.Router(); //desacoplando Router do express e alocando na nova variável

routes.put('/profile', ProfileController.edit); //editar perfil
routes.get('/profile', ProfileController.historico) //mostra o histórico de caronas

routes.get('/sessions', SessionController.login); //login 

routes.get('/usuarios', UsuariosController.index); //listagem de usuários
routes.post('/usuarios', UsuariosController.create); //cadastro de usuários

routes.post('/caronas', CaronasController.create); //postar caronas
routes.get('/caronas', CaronasController.index); //listar caronas
routes.delete('/caronas/:id', CaronasController.delete); //deletar caronas

routes.get('/caronas/filtros', FiltrosController.filtrarCaronas);

module.exports = routes;