import Cookies from 'js-cookie';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Navbar from '../../Content/Navbar/Navbar';
import SideBarLeft from '../../Content/SideBarLeft/SideBar';
import SideBarRigt from '../../Content/SideBarRight/SideBar';

export default function Beranda() {
  const token = Cookies.get('token');

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <Navbar />
      <div className="flex justify-between justify-items-center grid-cols-7 w-full">
        <SideBarLeft />
        <div className="justify-self-start col-span-4 grid-rows-1 px-3 py-4 mx-auto  w-[90%] ">
          <Outlet />
        </div>
        <SideBarRigt />
      </div>
    </>
  );
}
