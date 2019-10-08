const { QUERY_GRAPTH_PINNED_REPOS } = require("./constants/query");
const Octokat = require("Octokat");
const octo = new Octokat();
module.exports = ({ githubGraphqlService }) => {
  return {
    getPinnedRepos: async ctx => {
      const {
        organization: {
          pinnedItems: { totalCount, edges }
        }
      } = await githubGraphqlService(QUERY_GRAPTH_PINNED_REPOS);
      return edges;
    },
    getDetails: async repo => {
      const details = await octo.repos("vmware", [repo]).readme.fetch();
      return details;
    }
  };
};
