# js-api
Creates a REST API server from given JavaScript/JSON objects.
Uses [Koa](https://github.com/koajs/koa) for the REST API.

## Quickstart

```javascript
var jsapi = require('js-api');
var data = {posts: [{id: 'p1', title: 'first post', body: 'lorem ip sum'}]};
jsapi.start(data, 3000);
```

## Custom Routes and Middleware
See [example.js](example.js) for a complete example with custom middleware and custom route definitions for resources.

## License
MIT
