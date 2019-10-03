const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');


const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);

routes.post('/spots',upload.single('thumbnail'), SpotController.store); // Insere novos 

routes.get('/spots', SpotController.index); // Lista spots

routes.get('/dashboard', DashboardController.show); // Lista spots cadastrados do usuário

routes.post('/spots/:spot_id/bookings', BookingController.store);

module.exports = routes;