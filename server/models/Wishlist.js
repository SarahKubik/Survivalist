const mongoose = require("mongoose");

const { Schema } = mongoose;

const wishlistSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
});
// neeed to figure out what it still needs to contain in the wishlist
const Category = mongoose.model("Wishlist", wishlistSchema);

module.exports = Category;
