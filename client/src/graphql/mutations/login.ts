import gql from 'graphql-tag';

export const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      authToken
      error {
        message
      }
    }
  }
`;
