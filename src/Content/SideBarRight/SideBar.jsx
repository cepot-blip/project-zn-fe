import './SideBar.css';
import React from 'react';
import Trandding from './MainSidebar/Trandding/Trandding';
import Follow from './MainSidebar/Follow/Follow';

const SideBarRigt = () => {
  return (
    <div className="sidebar-3">
      <Trandding />
      <Follow />
    </div>
  );
};

export default SideBarRigt;
