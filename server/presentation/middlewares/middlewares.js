const koaBody = require("koa-body"),
  session = require("koa-session"),
  cors = require("@koa/cors"),
  { corsConfig, sessionConfig, serverConfig } = require("../../config"),
  { errorsMiddleware } = require("./errors");

module.exports = ({ app , logger }) => {
  app.keys = serverConfig.keys;
  app.use(errorsMiddleware(logger));
  app.use(cors(corsConfig));
  app.use(koaBody());
  app.use(session(sessionConfig, app));
};
