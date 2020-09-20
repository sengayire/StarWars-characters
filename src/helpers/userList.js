import { gql } from '@apollo/client';

const ghDevelopers = search => {
    const list = (search && search.edges ? search.edges : []).map(
      ({ node }, index) =>
        node
          ? {
              ...node,
              id: `${index}`,
              username: node.login,
              image: node.avatarUrl,
              stars: node.starredRepositories
            }
          : {}
    );
    return list;
  };
  

   const DEV_LIST_QUERY = gql`
  query Search($location: String!) {
    search(query: $location, type: USER, first: 100) {
      edges {
        cursor
        node {
          ... on User {
            name
            login
            bio
            email
            location
            url
            websiteUrl
            avatarUrl
            createdAt
            starredRepositories {
              totalCount
            }
            repositories {
              totalCount
            }
            followers {
              totalCount
            }
            following {
              totalCount
            }
          }
        }
      }
    }
    viewer {
      avatarUrl
    }
  }
`;


export { ghDevelopers, DEV_LIST_QUERY };