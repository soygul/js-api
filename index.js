'use strict';

/**
 * Entry point for JS-API app.
 * Initializes the database and starts listening for requests on configured port.
 */

var koa = require('koa'),
    app = koa(),
    logger = require('koa-logger'),
    cors = require('koa-cors'),
    bodyParser = require('koa-bodyparser'),
    crud = require('./crud');

// Koa config
app.use(logger());

app.use(cors({
  maxAge: 0,
  credentials: true,
  methods: 'GET, HEAD, OPTIONS, PUT, POST, DELETE',
  headers: 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
}));

app.use(bodyParser());

app.start = function (data, port) {
  port = port || 3000;
  data = data || {};

  // mount all resources defined in data as a generic crud route
  Object.keys(data).forEach(key => crud.init(app, data[key], data[key] || key));

  app.listen(port)

  console.log('JS-API server started on port %s', port)
}

module.exports = app;
