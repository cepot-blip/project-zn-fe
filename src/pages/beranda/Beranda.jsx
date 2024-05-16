import Cookies from 'js-cookie';
import {
  Bookmark,
  CircleUser,
  Compass,
  Home,
  Mail,
  Settings,
  Users,
} from 'lucide-react';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Navbar from '../../Content/Navbar/Navbar';
import SideBarLeft from '../../Content/SideBarLeft/SideBar';
import SideBarRigt from '../../Content/SideBarRight/SideBar';
import SidebarItem from '../../components/element/SideBarItem';

export default function Beranda() {
  const token = Cookies.get('token');
  const sidebarItems = [
    { icon: <Home />, text: 'Home', link: '' },
    { icon: <Compass />, text: 'Explore', link: 'explore' },
    { icon: <Mail />, text: 'Message', link: 'message' },
    { icon: <Bookmark />, text: 'Save', link: 'save' },
    { icon: <Users />, text: 'group', link: 'community' },
    { icon: <CircleUser />, text: 'Profile', link: 'profile' },
    { icon: <Settings />, text: 'Setting', link: 'setting' },
  ];

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <Navbar />
      <div className="flex px-4 lg:hidden justify-around mt-2 container mx-auto">
        {sidebarItems.map((item) => (
          <SidebarItem
            key={item.text}
            icon={item.icon}
            link={item.link}
            text={item.text}
          />
        ))}
      </div>
      <div className="container mx-auto flex justify-between justify-items-center grid-cols-7 w-full">
        <SideBarLeft />
        <div className="px-3 py-4 mx-auto w-[90%] ">
          <Outlet />
        </div>
        <SideBarRigt />
      </div>
    </>
  );
}
