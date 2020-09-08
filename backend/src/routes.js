const express = require ('express');
const UsuariosController = require ('./controllers/UsuariosController');
const SessionController = require ('./controllers/SessionController');
const CaronasController = require ('./controllers/CaronasController'); 
const MensagensController = require ('./controllers/MensagensController');
const HistoricoController = require('./controllers/HistoricoController') //importando express e controllers

const routes = express.Router(); //desacoplando Router do express e alocando na nova variável

routes.get('/sessions', SessionController.index); //login 

//metodos de usuario
routes.put('/usuarios', UsuariosController.edit); //antes estava no ProfileController, mas como era o único método lá presente, ele foi migrado para o UsuariosController
routes.get('/usuarios', UsuariosController.index); //listagem de usuários para ver perfil
routes.post('/usuarios', UsuariosController.create); //cadastro de usuários

//metodos carona
routes.post('/caronas', CaronasController.create); //postar caronas
routes.put('/caronas/:id', CaronasController.edit);
routes.get('/caronas', CaronasController.index); //listar caronas
routes.delete('/caronas/:id', CaronasController.delete); //deletar caronas

//metodos mensagem
routes.post('/usuarios/mensagens', MensagensController.create);
routes.get('/usuarios/mensagens', MensagensController.mostrarMensagensPorUsuario);
routes.put('/usuarios/mensagens', MensagensController.edit);

//metodos historico
routes.post('/historico', HistoricoController.create); //postar Historico
routes.get('/historico', HistoricoController.index); //listar Historico
routes.put('/historico', HistoricoController.edit);

module.exports = routes;