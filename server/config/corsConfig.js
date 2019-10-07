//refer to https://github.com/koajs/cors
//these are localhost configs TODO: Allow prod override
module.exports = {
  origin: "http://localhost:4200",
  allowMethods: "*",
  credentials: true,
};
