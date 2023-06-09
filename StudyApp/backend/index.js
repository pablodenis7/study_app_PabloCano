const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser());

app.use(cors({
    origin: '*'
}));

const userRoute = require("./src/route/users/users.route");
const themesRoute = require('./src/route/themes/themes.route');
const themesproperties = require ('./src/route/themes_properties/themes_properties.route');
const topicsRoute = require ('./src/route/topics/topics.route');
const { ThemesPropertiesModel } = require('./src/model/themes_properties.model');
 
//Ruta raiz
app.get('/', function (req, res) {
    //Logica.
    res.send('Hello World');
});

app.get('/pagina2', function (req, res) {
    //Logica de negocios
    //esta aqui -Controller

    res.json({application: 'Study APP', version: '1.0.0'});
});

//Llamadas a los routes de los UCs
userRoute(app);
themesRoute(app);
themesproperties(app);
topicsRoute(app);



app.listen(3000);