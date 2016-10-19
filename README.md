# js-api
Creates a REST API server from given JavaScript/JSON objects. Uses [Koa](https://github.com/koajs/koa) for the REST API.

## Example
```javascript
const jsapi = require('js-api')

const data = {posts: [{id: 1, title: 'first post', body: 'lorem ip sum'}]}

jsapi.start(data)
```

## License
MIT
