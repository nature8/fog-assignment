const mongoose = require('mongoose');
const Product = require('./models/Product');

mongoose.connect('mongodb://localhost:27017/fog-assignment', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const products = [
  {
    name: "Syltherine",
    price: 2500000,
    discount: 3500000,
    image: "/images/product1.png",
    brand: "Brand1",
    category: "Category1",
    imageDimensions: { width: 280, height: 301 }, // Image dimensions
    cardDimensions: { width: 285, height: 145 }, // Card dimensions
  },
  {
    name: "Leviosa",
    price: 2000000,
    discount: 2500000,
    image: "/images/product2.png",
    brand: "Brand2",
    category: "Category2",
    imageDimensions: { width: 280, height: 301 },
    cardDimensions: { width: 285, height: 145 },
  },
  {
    name: "Chairman",
    price: 1200000,
    discount: 1800000,
    image: "/images/product3.png",
    brand: "Brand3",
    category: "Category3",
    imageDimensions: { width: 280, height: 301 },
    cardDimensions: { width: 285, height: 145 },
  },
  {
    name: "Comfort Chair",
    price: 1800000,
    discount: 2200000,
    image: "/images/product4.png",
    brand: "Brand4",
    category: "Category4",
    imageDimensions: { width: 280, height: 301 },
    cardDimensions: { width: 285, height: 145 },
  },
  {
    name: "Breeze",
    price: 2100000,
    discount: 2400000,
    image: "/images/product1.png",
    brand: "Brand1",
    category: "Category1",
    imageDimensions: { width: 280, height: 301 },
    cardDimensions: { width: 285, height: 145 },
  },
  {
    name: "Elegance",
    price: 2600000,
    discount: 3000000,
    image: "/images/product2.png",
    brand: "Brand2",
    category: "Category2",
    imageDimensions: { width: 280, height: 301 },
    cardDimensions: { width: 285, height: 145 },
  },
  {
    name: "Majestic",
    price: 2800000,
    discount: 3200000,
    image: "/images/product3.png",
    brand: "Brand3",
    category: "Category3",
    imageDimensions: { width: 280, height: 301 },
    cardDimensions: { width: 285, height: 145 },
  },
  {
    name: "Opulence",
    price: 2300000,
    discount: 2700000,
    image: "/images/product4.png",
    brand: "Brand4",
    category: "Category4",
    imageDimensions: { width: 280, height: 301 },
    cardDimensions: { width: 285, height: 145 },
  },
  {
    name: "Explorer",
    price: 2400000,
    discount: 2900000,
    image: "/images/product1.png",
    brand: "Brand1",
    category: "Category1",
    imageDimensions: { width: 280, height: 301 },
    cardDimensions: { width: 285, height: 145 },
  },
  {
    name: "Voyager",
    price: 2700000,
    discount: 3100000,
    image: "/images/product2.png",
    brand: "Brand2",
    category: "Category2",
    imageDimensions: { width: 280, height: 301 },
    cardDimensions: { width: 285, height: 145 },
  },
  {
    name: "Recliner",
    price: 1900000,
    discount: 2200000,
    image: "/images/product3.png",
    brand: "Brand3",
    category: "Category3",
    imageDimensions: { width: 280, height: 301 },
    cardDimensions: { width: 285, height: 145 },
  },
  {
    name: "Ergo",
    price: 1500000,
    discount: 2000000,
    image: "/images/product4.png",
    brand: "Brand4",
    category: "Category4",
    imageDimensions: { width: 280, height: 301 },
    cardDimensions: { width: 285, height: 145 },
  },
  {
    name: "Zenith",
    price: 3000000,
    discount: 3500000,
    image: "/images/product1.png",
    brand: "Brand1",
    category: "Category1",
    imageDimensions: { width: 280, height: 301 },
    cardDimensions: { width: 285, height: 145 },
  },
  {
    name: "Vista",
    price: 2000000,
    discount: 2500000,
    image: "/images/product2.png",
    brand: "Brand2",
    category: "Category2",
    imageDimensions: { width: 280, height: 301 },
    cardDimensions: { width: 285, height: 145 },
  },
  {
    name: "Classic",
    price: 1700000,
    discount: 2100000,
    image: "/images/product3.png",
    brand: "Brand3",
    category: "Category3",
    imageDimensions: { width: 280, height: 301 },
    cardDimensions: { width: 285, height: 145 },
  },
  {
    name: "Fusion",
    price: 2200000,
    discount: 2600000,
    image: "/images/product4.png",
    brand: "Brand4",
    category: "Category4",
    imageDimensions: { width: 280, height: 301 },
    cardDimensions: { width: 285, height: 145 },
  },
];

Product.insertMany(products)
  .then(() => {
    console.log("Products inserted successfully!");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Error inserting products:", err);
    mongoose.connection.close();
  });
