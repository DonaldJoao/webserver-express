const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 8080;

app.use( express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    
    res.render('home.hbs', {
        nombre: 'Donald Joao Valdez',
        anio: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs');
});

app.get('/data', (req, res) => {
    res.send('hola data');
});

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});