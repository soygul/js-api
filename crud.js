'use strict';

/**
 * Generates generic Koa CRUD controller for a given resource.
 */

var route = require('koa-route'),
    _ = require('lodash');

/**
 * Register Koa routes on a given Koa app for a given resource.
 */
exports.init = function (app, resource, routeName) {
  routeName = '/' + routeName

  // list all items filtered by query (if any)
  app.use(route.get(routeName, function *() {
    this.body = _.filter(resource, this.query)
  }));

  // get one item by id
  app.use(route.get(routeName + '/:id', function *(id) {
    var item = _.find(resource, {id: id});
    if (!item) {
      this.status = 404;
      return;
    }
    this.body = item;
  }));

  // create new item
  app.use(route.post(routeName, function *() {
    resource.push(this.request.body);
    this.status = 201;
    this.body = this.request.body;
  }));

  // update item by id
  app.use(route.put(routeName + '/:id', function *(id) {
    var i = _.findIndex(resource, {id: id});
    resource[i] = this.request.body;
    this.status = 200;
    this.body = this.request.body;
  }));

  // delete item by id
  app.use(route.delete(routeName + '/:id', function *(id) {
    var i = _.findIndex(resource, {id: id});
    resource.splice(i, 1);
    this.status = 204;
  }));
};
