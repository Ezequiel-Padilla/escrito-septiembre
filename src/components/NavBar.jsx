import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div>
    <h1>Navbar</h1>
    <Link to="/register">
      Login
    </Link>
    <Link to="/get">
      get
    </Link>
  </div>
);

export default NavBar;
