var jsapi = require('./app'); // this is a regular Koa app
var data = {posts: [{id: 1, title: 'first post', body: 'lorem ip sum'}], users: [{id: 1, name: 'Chuck'}]};

// define custom API route for 'users'
data.users.route = 'local-users'

// define custom Koa middleware/routes if necessary
jsapi.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

jsapi.start(data, 3000);
