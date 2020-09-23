var express = require('express');
const mysql = require('mysql');
 var app = express();
 var bodyParser = require('body-parser');

 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({
     extended: true
 }));
 // default route
 app.get('/', function (req, res) {
     return res.send({ error: true, message: 'Welcome to My Project Management System' })
 });
 
require("./app/routes/customer.routes.js")(app);
 // set port
 app.listen(3000, function () {
     console.log('Node app is running on port 3000');
 });
 module.exports = app;