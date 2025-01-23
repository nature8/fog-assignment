// import React from "react";
// import './ProductCard.css';

// const ProductCard = ({ name, price, image, discount }) => (
//   <div className="col-md-3 col-sm-6 mb-4">
//     <div className="card product-card">
//       <img 
//         src={image} 
//         className="card-img-top product-image" 
//         alt={name} 
//       />
//       <div className="card-body">
//         <h5 className="card-title">{name}</h5>
//         <p className="card-text">{name}</p> 
//         <div className="price-discount d-flex justify-content-between align-items-center">
//           <p className="price-text mb-0">Rp {price}</p>
//           {discount && (
//           <span className="badge text-dark">
//             <del>{discount}</del> Off
//           </span>
//           )}
//         </div>
//       </div>
//     </div>
//   </div>
// );

// export default ProductCard;


import React from "react";
import "./ProductCard.css";

const ProductCard = ({ name, price, image, discount }) => (
  <div className="col-md-3 col-sm-6 mb-4">
    <div className="card product-card">
      <img src={image} className="card-img-top product-image" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{name}</p>
        <div className="price-discount d-flex justify-content-between align-items-center">
          <p className="price-text mb-0">Rp {price}</p>
          {discount && (
            <span className="badge text-dark">
              <del>{discount}</del> Off
            </span>
          )}
        </div>
      </div>
      {/* Hover overlay */}
      <div className="overlay-content">Add to Cart</div>
      {/* Hover actions */}
      <div className="actions">
        <div>
          <i className="bi bi-share"></i>
          <span>Share</span>
        </div>
        <div>
          <i className="bi bi-arrow-left-right"></i>
          <span>Compare</span>
        </div>
        <div>
          <i className="bi bi-heart"></i>
          <span>Like</span>
        </div>
      </div>
    </div>
  </div>
);

export default ProductCard;




// import React, { useEffect, useState } from 'react';
// import ProductCard from './ProductCard';
// import './Shop.css';

// const Shop = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:5000/api/products')  // Adjust the API endpoint if needed
//       .then((response) => response.json())
//       .then((data) => setProducts(data.products))
//       .catch((error) => console.error('Error fetching products:', error));
//   }, []);

//   return (
//     <div className="shop-page">
//       <div className="container">
//         <div className="row">
//           {products.map((product, index) => (
//             <div key={index} className="col-md-3 mb-4">
//               <ProductCard product={product} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Shop;
