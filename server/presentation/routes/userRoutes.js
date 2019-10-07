module.exports = ({ router, userController, routesConfig: { USER_ROUTES } }) => {
  router.get(USER_ROUTES.AUTHENTICATED, userController.authenticated);
  router.get(USER_ROUTES.LOGOUT, userController.logout);
  router.post(USER_ROUTES.AUTHENTICATE, userController.authenticate);
  router.get(USER_ROUTES.PINNED_REPOS, userController.pinned_repos);
  router.get(USER_ROUTES.PINNED_REPOS_README, userController.pinned_repos_readme);
  router.get(USER_ROUTES.PINNED_REPOS_COMMITS, userController.pinned_repos_commits);
  router.get(USER_ROUTES.PINNED_REPOS_DOWNLOAD_PATCH, userController.pinned_repos_download_patch);
};
