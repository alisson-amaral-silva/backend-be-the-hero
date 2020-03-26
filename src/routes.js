const express = require('express');
const connection = require('./database/connection');

const OngController = require('./database/controllers/OngController');
const IncidentController = require('./database/controllers/IncidentController');
const ProfileController = require('./database/controllers/ProfileController');
const SessionController = require('./database/controllers/SessionController');

const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profiles', ProfileController.index);

routes.post('/session', SessionController.create);



module.exports = routes;