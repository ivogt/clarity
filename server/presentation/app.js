const Koa = require("koa"),
  Router = require("koa-router");
module.exports = [
  () => new Koa(),
  () => new Router(),
  ({ app, router, serverConfig, logger }) => {
    const start = () => {
      app.use(router.routes())
      app.use(router.allowedMethods())
      app.listen(serverConfig.port);
      logger.info(
        `"Github Dashboard" app listening on port ${serverConfig.port}!`
      );
    };

    return start;
  }
];
