const { AuthenticationError } = require("apollo-server-express");
const { User, Item } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      return await User.findById(context.user._id).populate("wishlist");
    },
    // users: async (parent, args, context) => {
    //   return await User.find({}).populate("wishlist");
    // },
    // query item still needs to be finished
    item: async (parent, args, context) => {
      const item = await Item.findById(context.item._id);
      return item;
    },
    // items: async (parent, args, context) => {
    //   return await Item.find({});
    // },
    itemSearch: async (parent, args) => {
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
    login: async (parent, { input }) => {
      const user = await User.findOne({ email: input.email });

      if (!user) {
        throw new AuthenticationError("Incorrect user");
      }

      const correctPw = await user.isCorrectPassword(input.password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password");
      }

      const token = signToken(user);

      return { token, user };
    },
    addItem: async (parent, args) => {
      const item = await Item.create(args);
      return item;
    },
    updateWishlist: async (parent, { id }, context) => {
      if (context.user) {
        const wishList = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { wishlist: id } },
          { new: true }
        ).populate("wishlist");
        return wishList;
      }
      throw new AuthenticationError("Have to be logged in.");
    },
  },
};
// updateClass: async (parent, { id, building }) => {
//   // Find and update the matching class using the destructured args
//   return await Class.findOneAndUpdate(
//     { _id: id },
//     { building },
//     // Return the newly updated object instead of the original
//     { new: true }
//   );
// }

// addClass: async (parent, { school, name, building, creditHours, professor }) => {
//   const { _id } = await Class.create({ name, building, creditHours, professor });
//   return await School.findOneAndUpdate({ _id: school }, { $push: { classes: _id } }, { new: true }).populate("classes").populate({
//     path: 'classes',
//     populate: 'professor'
//   });
// },

module.exports = resolvers;
