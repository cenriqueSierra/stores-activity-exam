const connection = require('./src/models/routes');
const express = require('express');
const mongoose = require("mongoose");
const structure = require('./src/models/structure');
const { urlencoded } = require('express');
const path = require('path');
const handlebars = require('handlebars');
const exphbs = require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
const bodyparser = require('body-parser');
const { engine } = require('express-handlebars');


const routescontroller = require('./src/controller/routescontroller');

const app = express();

const port = 3000;

mongoose.set('strictQuery', true);

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

//template engine

app.set('views',path.join(__dirname,'src/views')); //muestra css

app.engine('hbs', exphbs.engine({
    handlebars: allowInsecurePrototypeAccess(handlebars),
    extname: 'hbs',
    defaultLayout: "mainLayout",
    layoutsDir: path.join(app.get('views'), 'layouts'), //patrones de diseños, ruta donde están los diseños
  })
);

app.set('view engine', '.hbs');

app.set(express.urlencoded({extended: false}));

app.get('/', (req,res) => {
    res.send(`
  <h2>Welcome to ASSR APP</h2>
  <h3>Click here to get access to the <b> <a href="/router/list">DATABASE</a></b></h3>
  `);
    //res.render('mainLayout');
})
app.listen(port, () => {
    console.log(`Server is listening in the port ${port}`);
});

connection.connectionDB();
structure.storeModel;

app.use('/router', routescontroller);
/*
structure.storeModel;

*/