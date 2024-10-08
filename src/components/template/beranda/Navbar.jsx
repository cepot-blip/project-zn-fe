import { Input } from '@nextui-org/react';
import { Bell, ChevronDown } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useUserStore } from '../../../store/user/store';
import UserImg from '../../element/UserImg';

export default function Navbar() {
  const userData = useUserStore((state) => state.userData);
  return (
    <div className="w-screen mx-auto shadow  px-4">
      <div className="container flex justify-between items-center w-full mx-auto ">
        <div className="lg:pl-8">
          <NavLink to="#">
            <img
              className="lg:w-16 lg:h-16 w-12 h-12"
              src="/zn.svg"
              alt="logo"
            />
          </NavLink>
        </div>

        <div className="hidden lg:w-full max-w-80">
          <Input size="sm" type="text" label="search" className="w-full" />
        </div>

        <div className="flex gap-8 items-center">
          <NavLink to="#">
            <Bell size={24} strokeWidth={1.25} />
          </NavLink>
          <div className="flex items-center gap-3">
            <NavLink to="#">
              <UserImg src={userData?.profilePicture} alt="profile" size="sm" />
            </NavLink>

            <h1>{userData?.username}</h1>

            <NavLink to="#">
              <ChevronDown size={12} strokeWidth={1.25} />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
