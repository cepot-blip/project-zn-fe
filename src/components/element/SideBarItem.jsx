import React from 'react';

const SidebarItem = ({ icon, text }) => (
  <div className="sideBarLeft">
    <img src={icon} alt={text} style={{ width: '3vw', height: '5vh' }} />
    <h4 style={{ fontSize: '0.8em' }}>{text}</h4>
  </div>
);

export default SidebarItem;
