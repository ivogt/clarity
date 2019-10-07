module.exports = {
  USER_ROUTES: {
    AUTHENTICATED: '/api/user/authenticated',
    AUTHENTICATE: '/api/user/authenticate',
    PINNED_REPOS: '/api/user/pinned-repos',
    PINNED_REPOS_README: '/api/user/pinned-repos/:repo/readme',
    PINNED_REPOS_COMMITS: '/api/user/pinned-repos/:repo/commits',
    PINNED_REPOS_DOWNLOAD_PATCH: '/api/user/pinned-repos/:repo/commit/:commit/patch',
  }
};
