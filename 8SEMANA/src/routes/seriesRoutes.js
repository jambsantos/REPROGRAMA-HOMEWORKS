// passo a passo
// 1. Importar o express
// 2. Importar o router 
// 3. Importar o controller
// 4. Criar a rota que traz todos os itens 
// 5. Exportar o router 

const express = require('express');
const route = express.Router();
const controller = require('../controller/seriesController');

route.get('/series',controller.getAll);
//route.get('/',controller.getAll);
// route.get('/:id',controller.getByID);
route.get('/series/:id',controller.getByID);
route.get('/genero',controller.getAllGenero);
route.get('/series/rota/:nome',controller.getByNome);
route.get('/protagonista',controller.getAllProtagonista);

module.exports = route;