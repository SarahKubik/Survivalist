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

// should add searchItem typeDef i think 
// this needs more too it
// export const QUERY_ITEM = gql`
// {
//     _id 
//     name 
//     description 
//     image 
//     price
// }
// `;
