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
    user: User
    item(name: NAME!): Item
    search(name: String!): [Item]
  }

  type Mutation {
    addItem(input: Item!): Item
    addUser(input: SignUpInput!): AuthUser
    login(input: SignInInput!): AuthUser
    addWishlist(input: [Item]): User
  }

  input SignInInput {
    email: String!
    password: String!
  }

  input SignUpInput {
    username: String!
    email: String!
    password: String!
  }
`;

module.exports = typeDefs;
