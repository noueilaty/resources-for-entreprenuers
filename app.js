const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
  mongoose = require('mongoose'),
  Directory = require('./api/models/directoryModel'), //created model loading here
  bodyParser = require('body-parser'),
  mustacheExpress = require('mustache-express');
  bluebird = require('bluebird');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Directory');

app.engine('mustache', mustacheExpress());

app.set('views', './views');
app.set('view engine', 'mustache');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/directoryRoutes');
routes(app);

app.listen(port);

console.log('Server started on port: ' + port);