// import Express.js (expressjs.com)
const express = require('express');
const path = require('path');

// 80 is the default port for web applicaitons
const port = 80;

// initialize express app
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//expose public directory
app.use(express.static('public'));


// register get response for the root directory
app.get('/', renderResponse);

// register server listener on the port
app.listen(port);

// function for building the get response 
// TODO: extend this functionality and fix naming
function renderResponse(request, response){
    response.render('index', {message: 'Hello World!'})
}

