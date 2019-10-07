const [application, router ,start] = require('./app');

module.exports = container => {
  container.registerService('app', application, false);
  container.registerService('router', router, false);
  container.registerService('appInit', start, false);
};
