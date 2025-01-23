// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  discount: Number,
  brand: String,      // Add a brand field for filtering
  category: String,   // Add a category field for filtering
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
