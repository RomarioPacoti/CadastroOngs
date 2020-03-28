const express = require('express');
const {celebrate, Segments, Joi} = require ('celebrate');

const ongController = require('./controllers/ongController');
const incidentsController = require('./controllers/incidentsController');
const profileController = require('./controllers/profileController');
const sessionControler = require('./controllers/sessionController');

const routes = express.Router();
routes.post('/session', sessionControler.create);  

routes.get('/ongs', ongController.index);  

routes.post('/ongs', celebrate({
    [Segments.BODY]:Joi.object().keys({
        name: Joi.string().required().min(3),
        email: Joi.string().required().email(),
        numero: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}) ,ongController.create);

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}),incidentsController.index);

routes.post('/incidents', celebrate({
    [Segments.HEADERS]: Joi.object({ authorization : Joi.string().required(),
    })
    .unknown(),
    [Segments.BODY]:Joi.object().keys({
        name: Joi.string().required().min(3),
        email: Joi.string().required().email(),
        numero: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}),incidentsController.create);

routes.delete('/incidents/:id',  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}),incidentsController.delete);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({ authorization : Joi.string().required(),
    })
    .unknown(),
}),profileController.index);


module.exports =  routes;
