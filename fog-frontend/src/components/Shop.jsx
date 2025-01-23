
import React from "react";
import ProductCard from "./ProductCard";
import './Shop.css';
import shopi from '../images/shopi.png'; 
import product1 from '../images/product1.png'; 
import product2 from '../images/product2.png'; 
import product3 from '../images/product3.png'; 
import product4 from '../images/product4.png'; 

const products = [
  { name: "Syltherine", price: "2,500,000", image: product1, discount: "3,500,000" },
  { name: "Leviosa", price: "2,000,000", image: product2, discount: "2,500,000" },
  { name: "Chairman", price: "1,200,000", image: product3, discount: "1,800,000" },
  { name: "Comfort Chair", price: "1,800,000", image: product4, discount: "2,200,000" },
  { name: "Breeze", price: "2,100,000", image: product1, discount: "2,400,000" },
  { name: "Elegance", price: "2,600,000", image: product2, discount: "3,000,000" },
  { name: "Majestic", price: "2,800,000", image: product3, discount: "3,200,000" },
  { name: "Opulence", price: "2,300,000", image: product4, discount: "2,700,000" },
  { name: "Explorer", price: "2,400,000", image: product1, discount: "2,900,000" },
  { name: "Voyager", price: "2,700,000", image: product2, discount: "3,100,000" },
  { name: "Recliner", price: "1,900,000", image: product3, discount: "2,200,000" },
  { name: "Ergo", price: "1,500,000", image: product4, discount: "2,000,000" },
  { name: "Zenith", price: "3,000,000", image: product1, discount: "3,500,000" },
  { name: "Vista", price: "2,000,000", image: product2, discount: "2,500,000" },
  { name: "Classic", price: "1,700,000", image: product3, discount: "2,100,000" },
  { name: "Fusion", price: "2,200,000", image: product4, discount: "2,600,000" }
];

const Shop = () => (
  <div className="shop-page">
    {/* Image with 50% opacity */}
    <div className="image-container">
      <img src={shopi} alt="Shop" className="shop-image" />
      <div className="overlay">
        <h1 className="shop-heading text-dark">SHOP</h1>
        <div className="breadcrumb">
          <span className="breadcrumb-text text-dark">Home</span>
          <span className="breadcrumb-arrow"> &gt; </span>
          <span className="breadcrumb-text text-dark">Shop</span>
        </div>
      </div>
    </div>

    {/* New Filter Section */}
    <div className="filter-section">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Left Part */}
        <div className="left-part d-flex align-items-center">
          <i className="bi bi-sliders filter-icon"></i>
          <span className="filter-text">Filter</span>
          <i className="bi bi-grid-fill filter-icon"></i>
          <i className="bi bi-view-list filter-icon"></i>
          <span className="results-text text-dark">Showing 1-16 of 32 results</span>
        </div>

        {/* Right Part */}
        <div className="right-part d-flex align-items-center">
          <span className="show-text">Show</span>
          <input type="text" className="form-control number-input" value="16" />
          <span className="short-by-text">Short by</span>
          <input type="text" className="form-control default-input" value="Default" />
        </div>
      </div>
    </div>

    <div className="container">
      <div className="row py-5">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
      <nav className="d-flex justify-content-center mt-4">
        <ul className="pagination">
          <li className="page-item active">
            <a className="page-link" href="#">1</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">2</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">3</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default Shop;


// Shop.jsx
// import React, { useState, useEffect } from 'react';
// import ProductCard from './ProductCard';
// import './Shop.css';

// const Shop = () => {
//   const [products, setProducts] = useState([]);
//   const [filters, setFilters] = useState({
//     brand: '',
//     category: '',
//     priceRange: '',
//     sort: 'name', // Default sort by name
//     page: 1,
//   });

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const { brand, category, priceRange, sort, page } = filters;
//       const response = await fetch(
//         `http://localhost:5000/api/products?brand=${brand}&category=${category}&priceRange=${priceRange}&sort=${sort}&page=${page}&limit=16`
//       );
//       const data = await response.json();
//       setProducts(data.products);
//     };

//     fetchProducts();
//   }, [filters]); // Re-fetch data when filters change

//   const handlePagination = (pageNumber) => {
//     setFilters((prevFilters) => ({ ...prevFilters, page: pageNumber }));
//   };

//   return (
//     <div className="shop-page">
//       <div className="filter-section">
//         {/* Add filter and sort options */}
//         <select onChange={(e) => setFilters({ ...filters, sort: e.target.value })}>
//           <option value="name">Sort by Name</option>
//           <option value="price">Sort by Price (Low to High)</option>
//           <option value="price_desc">Sort by Price (High to Low)</option>
//         </select>
//         <select onChange={(e) => setFilters({ ...filters, brand: e.target.value })}>
//           <option value="">All Brands</option>
//           <option value="BrandA">Brand A</option>
//           <option value="BrandB">Brand B</option>
//           {/* Add more brand options */}
//         </select>
//         {/* Add category filter */}
//         <select onChange={(e) => setFilters({ ...filters, category: e.target.value })}>
//           <option value="">All Categories</option>
//           <option value="Chair">Chair</option>
//           <option value="Table">Table</option>
//           {/* Add more categories */}
//         </select>
//         {/* Add price range filter */}
//         <select onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}>
//           <option value="">All Prices</option>
//           <option value="2000000">Below 2,000,000</option>
//           <option value="3000000">Below 3,000,000</option>
//           {/* Add more price ranges */}
//         </select>
//       </div>

//       <div className="container">
//         <div className="row">
//           {products.map((product, index) => (
//             <div key={index} className="col-md-3 mb-4">
//               <ProductCard product={product} />
//             </div>
//           ))}
//         </div>

//         {/* Pagination Controls */}
//         <div className="pagination-container">
//           <button onClick={() => handlePagination(filters.page - 1)} disabled={filters.page === 1}>
//             Previous
//           </button>
//           <button onClick={() => handlePagination(filters.page + 1)}>
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Shop;
