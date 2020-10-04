// passo-a-passo
// 1. Importar o express
// 2. Declarar a variável app atribuindo o método do express
// 3. Importar a rota
// 4. Usar a rota criada
// 5. Exportar o app

const express = require('express');
const app = express();

const series = require('./routes/seriesRoutes');

app.use(express.static('public'));

//app.use('/series',series);
 app.use('/',series);

app.use('*',(req,res)=> {
    res.status(404).sendFile('./views/404.html', {root:__dirname});
})

module.exports = app;

