// import Express.js (expressjs.com)
const express = require('express');

// initialize express app
const app = express();

// 80 is the default port for web applicaitons
let port = 80;

// register get response for the root directory
app.get('/', getResponse);

// register server listener on the port
app.listen(port);

// function for building the get response 
// TODO: extend this functionality and fix naming
function getResponse(request, response){
    response.send('Hello World!');
}

