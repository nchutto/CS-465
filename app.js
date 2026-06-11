var express = require('express');
var path = require('path');
var hbs = require('hbs');
var cors = require('cors');

var indexRouter = require('./app_server/routes/index');
var travelRouter = require('./app_server/routes/travel');
var apiRouter = require('./app_api/routes/index');

require('./app_api/models/db');

var app = express();

app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

hbs.registerPartials(path.join(__dirname, 'app_server', 'views', 'partials'));

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname)));

app.use('/', indexRouter);
app.use('/travel', travelRouter);
app.use('/api', apiRouter);

module.exports = app;