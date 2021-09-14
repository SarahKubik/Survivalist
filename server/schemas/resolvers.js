const { AuthenticationError } = require("apollo-server-express");
const { User, Item, Wishlist } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      return await User.findById(context.user._id).populate("wishlist");
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    addItem: async (parent, args) => {
      const item = await Item.create(args);
      return item;
    },
  },
};

module.exports = resolvers;
