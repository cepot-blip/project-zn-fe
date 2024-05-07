import './Navbar.css';
import React from 'react';
import { Bell, ArrowDown } from 'react-feather';
import UserImg from '../../components/element/UserImg';
import Link from '../../components/element/Link';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-1">
        <Link>
          <h1>Logo</h1>
        </Link>
      </div>
      <div className="navbar-2">
        <input
          type="text"
          placeholder="Search"
          className="input"
          name=""
          id="Search"
        />
      </div>
      <div style={{ margin: 'auto' }}></div>
      <div className="navbar-3">
        <Link href="#">
          <Bell />
        </Link>
      </div>
      <div className="navbar-4">
        <Link href="#">
          <UserImg />
        </Link>
      </div>
      <div className="navbar-5">
        <h1>Username</h1>
      </div>
      <div className="navbar-6">
        <Link href="#">
          <ArrowDown />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
