'use strict';

/**
 * Entry point for JS-API app.
 * Initializes the database and starts listening for requests on configured port.
 */

var koa = require('koa'),
    app = koa(),
    logger = require('koa-logger'),
    cors = require('koa-cors'),
    bodyParser = require('koa-bodyparser');

// Koa config
app.use(logger());

app.use(cors({
  maxAge: config.app.cacheTime / 1000,
  credentials: true,
  methods: 'GET, HEAD, OPTIONS, PUT, POST, DELETE',
  headers: 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
}));

app.use(bodyParser());

app.useData = function (data, port) {
  app.listen(port)
}

module.exports = app;
