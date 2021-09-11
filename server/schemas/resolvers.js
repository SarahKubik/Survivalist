const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    hello: () => "world",
  },

  // user: async (parent, args, context) => {
  //   if (context.user) {
  //     const user = await User.findById(context.user._id);
  //     return user;
  //   }
  // },
  // Mutation: {
  //   addUser: async (parent, args) => {
  //     const user = await User.create(args);
  //     const token = signToken(user);

  //     return { token, user };
  //   },
  // },
  // user: async (parent, args, context) => {
  //   if (context.user) {
  //     const user = await User.findById(context.user._id);
  //     return user;
  //   }
  // },
  // Mutation: {
  //   addUser: async (parent, args) => {
  //     const user = await User.create(args);
  //     const token = signToken(user);

  //     return { token, user };
  //   },
  // },
};

module.exports = resolvers;
