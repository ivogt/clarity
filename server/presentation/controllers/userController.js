const { toUserViewModel } = require("../utils");
module.exports = ({ userService, githubService }) => ({
  authenticated: async (ctx, next) => {
    const { session } = ctx;
    const { isAuthenticated, userId, isNew } = session;
    if (isNew) session.isAuthenticated = false;

    if (!isAuthenticated) {
      ctx.body = { isAuthenticated: false };
      ctx.status = 401;
      return;
    }
    const user = await userService.getById(userId);
    console.log(user);
    ctx.body = toUserViewModel(user);
    ctx.status = 200;
  },

  authenticate: async (ctx, next) => {
    const { session } = ctx;
    const { query, request } = ctx,
      { email, password } = request.body;
    const user = await userService.getAndVerify(email, password);
    session.isAuthenticated = true;
    session.userId = user._id;

    ctx.body = toUserViewModel(user);
  },

  logout: (ctx, next) => {
    const { session } = ctx;
    session.isAuthenticated = false;
    session.userId = undefined;
    ctx.body = { isAuthenticated: false };
    ctx.status = 200;
  },
  pinned_repos: () => {},

  pinned_repos_readme: () => {},

  pinned_repos_commits: () => {},

  pinned_repos_download_patch: () => {}
});
