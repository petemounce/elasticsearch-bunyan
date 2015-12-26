# log with bunyan

[Per documentation](https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/logging.html#_bunyan_example) - this just makes that into a node package for convenience.

## Install

```shell
npm install elasticsearch-bunyan --save
```

## Getting started

### use a child logger (recommended)

https://github.com/trentm/node-bunyan#logchild

```js
var es = require('elasticsearch');
var BunyanLog = require('elasticsearch-bunyan');
var bunyan = require('bunyan');
var log = bunyan.createLogger({ name: 'mylogger' });
var client = new es.Client({
  bunyan: log.child({foo: 'bar'}),
  log: BunyanLog
});
```

### pass a bunyan configuration

```js
var es = require('elasticsearch');
var BunyanLog = require('elasticsearch-bunyan');
var client = new es.Client({
  bunyan: { name: 'mylogger' },
  log: BunyanLog
});
```

