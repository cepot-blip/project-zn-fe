import { Bell, ChevronDown } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import UserImg from '../../components/element/UserImg';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className="flex justify-between items-center  px-20  mx-auto">
      <div>
        <NavLink to="#">
          <img src="/zn.svg" alt="logo" />
        </NavLink>
      </div>

      <div>
        <div className="navbar-2 w-full">
          <input
            type="text"
            placeholder="Search"
            className="input lg:w-[538px] md:w-[300px] h-12"
            name=""
            id="Search"
          />
        </div>
      </div>

      <div className="flex gap-12 items-center">
        <NavLink to="#">
          <Bell size={36} strokeWidth={1.25} />
        </NavLink>
        <div className="flex items-center gap-3">
          <NavLink to="#">
            <UserImg src="/profile.png" alt="profile" />
          </NavLink>

          <h1>Username</h1>

          <NavLink to="#">
            <ChevronDown size={16} strokeWidth={1.25} />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
