const userService = require("./userService");
const { githubService, githubGraphqlService } = require("./githubService");

module.exports = container => {
  container.registerService("userService", userService);
  container.registerService("githubGraphqlService", githubGraphqlService);
  container.registerService("githubService", githubService);
};
