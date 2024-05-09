import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Content/Navbar/Navbar';
import SideBarLeft from '../../Content/SideBarLeft/SideBar';
import SideBarRigt from '../../Content/SideBarRight/SideBar';

export default function Beranda() {
  return (
    <>
      <Navbar />
      <div className="grid justify-items-center border grid-cols-7 w-full">
        <SideBarLeft />
        <Outlet />
        <SideBarRigt />
      </div>
    </>
  );
}
