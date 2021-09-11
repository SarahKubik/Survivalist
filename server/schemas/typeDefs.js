const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
  }
`;
// type Query {
//   user: User
//   }

//   type User {
//     _id: ID
//     name: String
//     email: String

//   type Auth {
//   token: ID
//   user: User
//   }

//    type Mutation {
//     addUser(lastName: String!, email: String!, password: String!): Auth
//     login(email: String!, password: String!): Auth
//   }

/*type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }
  */

// Took next 2 lines from type Query {}
//   order(_id: ID!): Order
// checkout(products: [ID]!): Checkout

// Took this from type Mutation {}
//  addOrder(products: [ID]!): Order
//  type Category {
//   _id: ID
//   name: String
// }

// type Product {
//   _id: ID
//   name: String
//   description: String
//   image: String
//   quantity: Int
//   price: Float
//   category: Category
// }

// type Checkout {
//   session: ID
// }

// updateUser(
//   firstName: String
//   lastName: String
//   email: String
//   password: String
// ): User
// updateProduct(_id: ID!, quantity: Int!): Product
// login(email: String!, password: String!): Auth
// }
// type User {
//   _id: ID
//   firstName: String
//   lastName: String
//   email: String
// }

// type Auth {
//   token: ID
//   user: User
// }
// type Query {
//   numberSix: Int! # Should always return the number 6 when queried
//   numberSeven: Int! # Should always return 7
// }

// type Mutation {
//   addUser(
//     firstName: String!
//     lastName: String!
//     email: String!
//     password: String!
//   ): Auth

module.exports = typeDefs;
