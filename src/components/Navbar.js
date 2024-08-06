import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../logo.jpg';
import '../styles/Navbar.css';


const Navbar = () => {
  const cartItemsCount = useSelector(state => state.cart.items.length);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="E-commerce Logo" height="100" className=" align-top me-2 rounded-circle mx-5" />
          <h1>E-Commerce</h1>
        </Link>
        <div className="navbar-nav">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/products">Products</Link>
          <Link className="nav-link" to="/cart">
            Cart <span className="badge bg-primary">{cartItemsCount}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
