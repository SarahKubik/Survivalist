const { ApolloServer, gql } = require("apollo-server");
const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();
const { DB_URI, DB_NAME } = process.env;

const typeDefs = gql`
    type User {
        id: ID!
    }
`;

const resolvers = {

};

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
