const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    name: String!
    email: String!
    wishlist: [Item]
  }
  type AuthUser {
    token: ID
    user: User
  }

  type Item {
    name: String!
    description: String!
    image: String!
    price: Float!
  }

  type Query {
    user(id: ID!): User
    item(name: String!): Item
    search(name: String!): [Item]
    users: [User]
    items: [Item]
   
  }

  type Mutation {
    addItem(name: String!, description: String!, image: String!, price: Float!): Item
    addUser(input: SignUpInput!): AuthUser
    login(input: SignInInput!): AuthUser
    addWishlist(name: String!, description: String!, image: String!, price: Float!): User
  }

  input SignInInput {
    email: String!
    password: String!
  }

  input SignUpInput {
    name: String!
    email: String!
    password: String!
  }
`;

module.exports = typeDefs;
