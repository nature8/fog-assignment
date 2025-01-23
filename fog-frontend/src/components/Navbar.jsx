// import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Navbar.css';
// import logo from '../images/logo.png';

// const Navbar = () => (
//   <nav className="navbar navbar-expand-lg navbar-light bg-light">
//     <div className="container">
//       <a className="navbar-brand" href="#">
//         <img src={logo} className="logo" />
//         Furniro
//       </a>
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-bs-toggle="collapse"
//         data-bs-target="#navbarNav"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarNav">
//         <ul className="navbar-nav ms-auto">
//           <li className="nav-item"><a className="nav-link text-center" href="#">Home</a></li>
//           <li className="nav-item"><a className="nav-link text-center" href="#">Shop</a></li>
//           <li className="nav-item"><a className="nav-link text-center" href="#">About</a></li>
//           <li className="nav-item"><a className="nav-link text-center" href="#">Contact</a></li>
//         </ul>
//       </div>
//     </div>
//   </nav>
// );

// export default Navbar;


import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import logo from '../images/logo.png';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      {/* Left-aligned Logo */}
      <a className="navbar-brand" href="#">
        <img src={logo} className="logo" alt="Logo" />
        Furniro
      </a>

    
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item bg-light">
            <a className="nav-link text-center text-dark" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-center text-dark" href="#">Shop</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-center text-dark" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-center text-dark" href="#">Contact</a>
          </li>
        </ul>
      </div>

      {/* Right-aligned Icons */}
      <div className="d-flex ms-auto">
        <a href="#" className="me-4">
          <i className="bi bi-person icon-black"></i> 
        </a>
        <a href="#" className="me-4">
          <i className="bi bi-search icon-black"></i> 
        </a>
        <a href="#" className="me-4">
          <i className="bi bi-heart icon-black"></i> 
        </a>
        <a href="#">
          <i className="bi bi-cart icon-black"></i> 
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;
