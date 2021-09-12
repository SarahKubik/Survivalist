const { gql } = require("apollo-server-express");

const users = [
  {
    firstName: "caden",
    lastName: "witbeck",
  },
  {
    firstName: "drew",
    lastName: "selden",
  },
];

const items = [
  {
    name: "hammer",
    description: "tool",
  },
  {
    name: "drill",
    description: "another tool",
  },
];

const typeDefs = gql`
  type Query {
    users: [User]
    items: [Item]
  }

  type User {
    firstName: String
    lastName: String
  }

  type Item {
    name: String
    description: String
  }
`;

module.exports = typeDefs;

// type User {
//   _id: ID!
//   name: name!
//   email: email
// }

// type Item {
//   image: String!
//   name: String!
//   price: Float!
//   description: String!
// }
