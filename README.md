# js-api
Creates a REST API server from given JavaScript/JSON objects.
Uses [Koa](https://github.com/koajs/koa) for the REST API.
Extendable with custom routes and middleware.

## Quickstart
Install the package in your project directory:

```bash
npm install js-api
```

Start js-api server with some data:

```javascript
var jsapi = require('js-api');

var data = {posts: [{id: 'p1', title: 'first post', body: 'lorem ipsum'}]};

jsapi.start(data, 3000);
```

Now browse to [http://localhost:3000/posts](http://localhost:3000/posts) and you will see the posts in JSON format.

## Custom Routes and Middleware
See [example.js](example.js) for a complete example with custom middleware and custom route definitions for resources.

You can download the entire repo and start the example directly with:

```bash
npm install
npm start
```

And browse to [http://localhost:3000/posts](http://localhost:3000/posts) to see the contents of the example.

## License
MIT
