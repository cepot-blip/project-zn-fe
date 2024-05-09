import {
  Bookmark,
  CircleUser,
  Compass,
  Ellipsis,
  Home,
  Mail,
  Settings,
  Users,
} from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../components/element/Button';
import SidebarItem from '../../components/element/SideBarItem';
import UserImg from '../../components/element/UserImg';
import './SideBar.css';

export default function SideBarLeft() {
  const sidebarItems = [
    { icon: <Home />, text: 'Home', link: '' },
    { icon: <Compass />, text: 'Explore', link: 'explore' },
    { icon: <Mail />, text: 'Message', link: 'message' },
    { icon: <Bookmark />, text: 'Save', link: 'save' },
    { icon: <Users />, text: 'group', link: 'community' },
    { icon: <CircleUser />, text: 'Profile', link: 'profile' },
    { icon: <Settings />, text: 'Setting', link: 'setting' },
  ];

  return (
    <div className="flex justify-self-start col-span-1 flex-col items-center justify-between h-[90vh] pb-10 w-full">
      <div className="flex flex-col w-full gap-4 px-4 mt-10 justify-center ">
        {sidebarItems.map((item) => (
          <SidebarItem
            key={item.text}
            icon={item.icon}
            text={<NavLink to={item.link}>{item.text}</NavLink>}
            link={item.link}
          />
        ))}
      </div>

      <div className="flex flex-col gap-12 px-2">
        <Button fullrounded className="h-10 bg-[#3769A5] ">
          Post
        </Button>

        <div className="sidebar-1-2 items-center justify-between ">
          <UserImg src="/profile.png" alt="profile" />
          <div className="">
            <p>Username</p>
          </div>
          <Ellipsis size={24} strokeWidth={1.5} />
        </div>
      </div>
    </div>
  );
}
