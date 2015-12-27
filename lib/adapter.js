var bunyan = require('bunyan');

function BunyanAdapter(config) {
  // config is the object passed to the elasticsearch client constructor.
  var bun;
  if (!config.bunyan) {
    bun = bunyan.createLogger({name: 'elasticsearch'});
  } else {
    if (typeof(config.bunyan.child) === 'function') {
      bun = config.bunyan;
    } else {
      bun = bunyan.createLogger(config.bunyan);
    }
  }
  this.error = bun.error.bind(bun);
  this.warning = bun.warn.bind(bun);
  this.info = bun.info.bind(bun);
  this.debug = bun.debug.bind(bun);
  this.trace = function (method, requestUrl, body, responseBody, responseStatus) {
    bun.trace({
      method: method,
      requestUrl: requestUrl,
      body: body,
      responseBody: responseBody,
      responseStatus: responseStatus
    });
  };
  this.close = function () { /* bunyan's loggers do not need to be closed */ };
}
module.exports = BunyanAdapter;
