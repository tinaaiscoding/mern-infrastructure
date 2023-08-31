import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css'

const NavBar = () => {
  return (
    <nav>
      <Link to="/orders">Order History</Link>
      <Link to="/orders/new">New Order</Link>
    </nav>
  );
};

export default NavBar;
