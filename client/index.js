const { ApolloServer, gql } = require("apollo-server");

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

const resolvers = {
  Query: {
    users: () => users,
    items: () => items,
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
