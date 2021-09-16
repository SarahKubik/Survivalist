import { gql } from '@apollo/client';

export const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
            }
        }
    }`
export const ADD_USER = gql`
    mutation addUser($name: String!, $email: String!, $password: String!) {
        addUser(name: $name, email, password: $password) {
            token
            user {
                _id
            }
        }
    }
`;
export const ADD_ITEM = gql`
    mutation addItem($name: String!, $description: String!, $image: String!, $price: Float!) {
        addItem(name: $name, description: $description, image: $image, price: $price) {
            _id
            name
            description
            image
            price
        }
    }
`;   
  


