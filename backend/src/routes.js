//importa o express
const express = require('express');
//importa arquivo do ongcontroller.js
const OngController = require('./controllers/OngController')
//importa arquivo do IncidentController
//Para editar dois nomes ao mesmo tempo seleciona e aperta ctrl+D
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')


//cria uma variável que recebe o módulo de rotas 
const routes = express.Router();

routes.post('/sessions',SessionController.create)

//lista ongs
routes.get('/ongs',OngController.index );
//cria ongs 
routes.post('/ongs',OngController.create);
//lista incidents
routes.get('/incidents', IncidentController.index);
//cria incidents
routes.post('/incidents',IncidentController.create);
//deleta incident através do rout param id
routes.delete('/incidents/:id',IncidentController.delete);

routes.get('/profile',ProfileController.index);

//exporta as rotas
module.exports = routes;

