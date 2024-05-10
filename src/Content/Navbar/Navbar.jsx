import { Bell, ChevronDown } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import UserImg from '../../components/element/UserImg';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-20 mx-auto shadow">
      <div>
        <NavLink to="#">
          <img className="w-16 h-16" src="/zn.svg" alt="logo" />
        </NavLink>
      </div>

      <div>
        <div className="navbar-2 w-full">
          <input
            type="text"
            placeholder="Search"
            className="input hidden lg:block lg:w-[538px] md:w-[300px] h-12"
            name=""
            id="Search"
          />
        </div>
      </div>

      <div className="flex gap-8 items-center">
        <NavLink to="#">
          <Bell size={36} strokeWidth={1.25} />
        </NavLink>
        <div className="flex items-center gap-3">
          <NavLink to="#">
            <UserImg
              src="https://th.bing.com/th/id/OIP.Sw0g2adwtwCJAbIAveYGbgHaHa?rs=1&pid=ImgDetMain"
              alt="profile"
            />
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
