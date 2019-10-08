module.exports = {
  QUERY_GRAPTH_PINNED_REPOS :  `{
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
  }`
}
