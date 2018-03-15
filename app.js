const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
  mongoose = require('mongoose'),
  Directory = require('./api/models/directoryModel'), //created model loading here
  bodyParser = require('body-parser'),
  mustacheExpress = require('mustache-express'),
  promise = require('bluebird'),
  path = require('path'),
  methodOverride = require('method-override'),
  session = require("express-session");

mongoose.connect(
  "mongodb://admin:admin@ds019766.mlab.com:19766/createhtx"
);
mongoose.Promise = global.Promise;

app.engine('mustache', mustacheExpress());

app.set('views', './views');
app.set('view engine', 'mustache');

app.use(express.static(path.join(__dirname, 'public')));

app.use(
  session({
    secret: "cute dogs",
    resave: false,
    saveUninitialized: true
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/directoryRoutes');
routes(app);

app.listen(port);

console.log('Server started on port: ' + port);
