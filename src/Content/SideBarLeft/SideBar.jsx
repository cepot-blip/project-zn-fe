import React from 'react';
import './SideBar.css';
import SidebarItem from '../../components/element/SideBarItem';
import UserImg from '../../components/element/UserImg';
import Link from '../../components/element/Link';

const SideBarLeft = () => {
  const sidebarItems = [
    { icon: 'public/home.png', text: 'Home', link: '/' },
    { icon: 'public/explore.png', text: 'Explore', link: '/explore' },
    { icon: 'public/email.png', text: 'Message', link: '/message' },
    { icon: 'public/save.png', text: 'Save', link: '/save' },
    { icon: 'public/community.png', text: 'Community', link: '/community' },
    { icon: 'public/profile.png', text: 'Profile', link: '/profile' },
    { icon: 'public/setting.png', text: 'Setting', link: '/setting' },
  ];

  return (
    <div className="sidebar-1">
      {sidebarItems.map((item, index) => (
        <SidebarItem
          key={index}
          icon={item.icon}
          text={<Link>{item.text}</Link>}
        />
      ))}

      <div className="sidebar-1-1">
        <button>Post</button>
      </div>
      <div className="sidebar-1-2">
        <UserImg className="sidebar-1-2-1" />
        <p>Username</p>
        <img src="ellipsis.png" alt="" className="sidebar-1-2-2" />
      </div>
    </div>
  );
};

export default SideBarLeft;
