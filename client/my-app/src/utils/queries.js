import { gql } from '@apollo/client';


export const QUERY_USER = gql`
  {
    user {
        _id
        name
        email
        wishlist {
            _id
            name
            description
            image
            price
        }
    }
  }
`;
export const QUERY_USER_NAME = gql`
    query user($id:ID!) {
        user(id: $id) {
            name
        }
    }
`;