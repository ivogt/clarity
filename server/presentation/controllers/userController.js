const {
  toUserViewModel,
  toReposViewModel,
  toDetailsViewModel
} = require("../utils");
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
  pinned_repos: async ctx => {
    const repos = await githubService.getPinnedRepos();
    ctx.body = toReposViewModel(repos);
  },

  pinned_repos_readme: async ctx => {
    const { repo } = ctx.params;
    //console.log(repo, ctx.params);
    const details = await githubService.getDetails(repo);

    //console.log(details);
    ctx.body = { content: toDetailsViewModel(details) };
  },

  pinned_repos_commits: async () => {
    const license = (await octo.repos("vmware", ["clarity"]).fetch()).license;
    const commits = await octo.repos("vmware", ["clarity"]).commits.fetch();
  },

  pinned_repos_download_patch: () => {}
});
