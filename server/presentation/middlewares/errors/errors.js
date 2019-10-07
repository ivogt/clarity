const {
  ValidationError,
  NotFoundError
} = require("../../../utils/customErrors");

module.exports = (logger)=>(ctx, next) => {
  return next().catch(e => {
    logger.error(e.stack || e );
    ctx.body = { errors: [{ ...e, message: e.message, stack: e.stack || e }] };
    switch (e.constructor) {
      case ValidationError:
        return ctx.status = 400;
      case NotFoundError:
        return ctx.status = 404;
      default:
        return ctx.status = 500;
    }
  });
};
