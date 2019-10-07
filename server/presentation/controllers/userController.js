const { toUserViewModel } = require("../utils");
module.exports = ({ userService, githubService }) => ({
  authenticated: (ctx, next) => {
    const { session } = ctx;
    const { isAuthenticated, userId , isNew } = session;
    if(isNew) session.isAuthenticated = false;

    if (!isAuthenticated) {
      ctx.body = { isAuthenticated: false };
      ctx.status = 401;
      return;
    }
    const user = userService.getById(userId);
    ctx.body = { isAuthenticated, user };
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

  pinned_repos: () => {},

  pinned_repos_readme: () => {},

  pinned_repos_commits: () => {},

  pinned_repos_download_patch: () => {}
});
