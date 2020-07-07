const express = require ('express');
const UsuariosController = require ('./controllers/UsuariosController');
const SessionController = require ('./controllers/SessionController');
const CaronasController = require ('./controllers/CaronasController'); 
const FiltrosController = require ('./controllers/FiltrosController');
const MensagensController = require ('./controllers/MensagensController'); //importando express e controllers

const routes = express.Router(); //desacoplando Router do express e alocando na nova variável

routes.get('/sessions', SessionController.index); //login 

routes.put('/profile', UsuariosController.edit); //antes estava no ProfileController, mas como era o único método lá presente, ele foi migrado para o UsuariosController
routes.get('/usuarios', UsuariosController.index); //listagem de usuários
routes.post('/usuarios', UsuariosController.create); //cadastro de usuários

routes.post('/caronas', CaronasController.create); //postar caronas
routes.put('/caronas/:id', CaronasController.edit);
routes.get('/caronas', CaronasController.index); //listar caronas
routes.delete('/caronas/:id', CaronasController.delete); //deletar caronas

routes.get('/caronas/filtros', FiltrosController.filtrarCaronas);

routes.post('/usuarios/mensagens', MensagensController.create);
routes.get('/usuarios/mensagens', MensagensController.mostrarMensagensPorUsuario);

module.exports = routes;