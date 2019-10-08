const personal_access_token = "13a69307252e9481bb6900013ce81cc689b50108",
 { graphql } = require("@octokit/graphql");
const graphqli = graphql.defaults({
  headers: {
    authorization: `token ${personal_access_token}`
  }
});

module.exports = () => {
  return graphqli;
};
