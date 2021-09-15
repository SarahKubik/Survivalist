const { AuthenticationError } = require("apollo-server-express");
const { User, Item } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      return await User.findById(context.user._id).populate("wishlist");
    },
    // query item still needs to be finished
    item: async (parent, args, context) => {
      const item = Item.findById(context.item._id);
    },
    search: async (parent, args) => {
      const items = await Item.find({
        name: { $regex: ".*" + args.name + ".*" },
      });
      return items;
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
    // might not work uahaha
    addWishlist: async (parent, { wishlist }) => {
      const wishList = await User.findOne({ wishlist }).insert(Item);
      return wishList;
    },
  },
};

module.exports = resolvers;
