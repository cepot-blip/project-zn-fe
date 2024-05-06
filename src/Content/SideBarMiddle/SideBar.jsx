import React from 'react';
import './SideBar.css';
import Postingan from './Postingan/Postingan';
import MainContent from './MainContent/MainContent';

const SideBarMiddle = () => {
  return (
    <div className="sidebar-2">
      <Postingan />
      <MainContent />
    </div>
  );
};

export default SideBarMiddle;
