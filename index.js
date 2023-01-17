const express = require('express');

const app = express();

const port = 3000;

//template engine

app.set('view engine', 'ejs');

app.use(express.static(__dirname+'/src/public')); //In this case is index.js
app.set('views',__dirname+'/src/views'); //The views will be in the directory /views

app.listen(port, () => {
    console.log(`Server is listening in the port ${port}`);
})