const express = require('express');

const DevController = require('./controllers/DevControllers');
const LikeController = require('./controllers/LikeController');
const DeslikeController = require('./controllers/DeslikeController');

const routes = express.Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.post('/devs/:devId/like', LikeController.store)
routes.post('/devs/:devId/deslike', DeslikeController.store)

module.exports = routes;