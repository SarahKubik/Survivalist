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
    itemSearch(name: String!): [Item]
    # users: [User]
    # items: [Item]
  }

  type Mutation {
    addUser(input: SignUpInput!): AuthUser
    login(input: SignInInput!): AuthUser
    addItem(input: addItemInput!): Item
    updateWishlist(input: updateWishlistInput): User
  }

  input updateWishlistInput {
    name: String!
    description: String!
    image: String!
    price: Float!
  }

  input addItemInput {
    name: String!
    description: String!
    image: String!
    price: Float!
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
