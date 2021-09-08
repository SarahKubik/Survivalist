const { ApolloServer, gql } = require("apollo-server");
const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();
const { DB_URI, DB_NAME } = process.env;

const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

const typeDefs = gql`
  type Query {
    books: [Book]
  }

  type Book {
    title: String
    author: String
  }
`;

const resolvers = {
  Query: {
    books: () => books,
  },

const start = async () => {
  const client = new MongoClient(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  const db = client.db(DB_NAME);

  const context = {
    db,
  };

  const server = new ApolloServer({ typeDefs, resolvers, context });

  server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
  });
};

start();
