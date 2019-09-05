const marked = require('marked');
const personal_access_token = "13a69307252e9481bb6900013ce81cc689b50108";
let { graphql } = require("@octokit/graphql");
graphql = graphql.defaults({
  headers: {
    authorization: `token ${personal_access_token}`
  }
});
const query = `{
    organization(login:"vmware") {
    pinnedItems(first: 100, types: [REPOSITORY]) {
      totalCount
      edges {
        node {
          ... on Repository {
            name
            url
            resourcePath
            description
          }
        }
      }
    }
  }
}`;
const Octokat = require("Octokat");
const octo = new Octokat();

var run = async () => {
  var repo = await graphql(query);
  var details = await octo.repos('vmware',['clarity']).readme.fetch();
  var detailsHTML =marked(new Buffer(details.content,'base64').toString('ascii'));
  var license =  (await octo.repos('vmware',['clarity']).fetch()).license;
  var commits = await octo.repos('vmware',['clarity']).commits.fetch();
  console.log(repo.organization.pinnedItems.edges);
  console.log({ detailsHTML });
};

run();
