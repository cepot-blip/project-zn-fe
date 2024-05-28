import {
  Bookmark,
  CircleUser,
  Compass,
  Home,
  Mail,
  Settings,
  Users,
} from 'lucide-react';
import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import SidebarItem from '../../components/fragment/beranda/SideBarLeftItem';
import ProtectedLayout from '../../components/template/auth/ProtectedLayout';
import Navbar from '../../components/template/beranda/Navbar';
import SideBarLeft from '../../components/template/beranda/SideBarLeft';
import SidebarRight from '../../components/template/beranda/SidebarRight';
import useDataLogin from '../../hook/users/useDataLogin';
import { useUserStore } from '../../store/user/store';

export default function Beranda() {
  const location = useLocation();
  const pathname = location.pathname.split('/').filter(Boolean);
  const hideWhenPath = ['message'];
  const { userLogin = {} } = useDataLogin();
  const setUserData = useUserStore((state) => state.setUserData);
  useEffect(() => {
    if (userLogin) setUserData(userLogin?.query);
  }, [userLogin, setUserData]);

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
    <ProtectedLayout>
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
      <div className="container mx-auto flex justify-between justify-items-center w-full">
        <SideBarLeft />
        <div className="px-3 py-4 mx-auto w-[90%] ">
          <Outlet />
        </div>
        {hideWhenPath.includes(pathname[pathname.length - 1]) ? null : (
          <SidebarRight />
        )}
      </div>
    </ProtectedLayout>
  );
}
