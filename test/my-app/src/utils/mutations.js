import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

/*export const ADD_ITEM = gql`
mutation addItem($name: String!, $description: String!, $image: String!, $price: Float!) {
    addItem(name: $name, description: $description, image: $image, price: $price) {

        _id
        name
        description
        image
        price
    }
}
`;   */

/*export const UPDATE_WISHLIST = gql`
mutation updateWishList($id: ID!, $name: String!, $description: String!, $image: String!, $price: Float!) {
    updateWishList(id: $id, name: $name, description: $description, image: $image, price: $price) {
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
`;  */

export const ADD_USER = gql`
  mutation addUser(
    $name : String!
    $email: String!
    $password: String!
  ) {
    addUser(
      name: $name
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;
