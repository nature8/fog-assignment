
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Product = require('./models/Product');

const app = express();
const port = 5000;

// Enable CORS for requests from React frontend (port 3000)
app.use(cors({
  origin: 'http://localhost:3000',
}));

app.use(express.json());

// Serve static files (images)
app.use('/images', express.static('images'));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/fog-assignment', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// API endpoint for fetching products with filtering, sorting, and pagination
app.get('/api/products', async (req, res) => {
  const { brand, category, priceRange, sort, page = 1, limit = 10 } = req.query;

  const query = {};
  if (brand) query.brand = brand;
  if (category) query.category = category;
  if (priceRange) query.price = { $lte: priceRange };

  const sortOptions = {};
  if (sort === 'name') sortOptions.name = 1; // Sort by name
  if (sort === 'price') sortOptions.price = 1; // Sort by price

  try {
    const products = await Product.find(query)
      .sort(sortOptions)
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const totalCount = await Product.countDocuments(query);

    res.json({
      products,
      totalCount,
      page,
      totalPages: Math.ceil(totalCount / limit),
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

