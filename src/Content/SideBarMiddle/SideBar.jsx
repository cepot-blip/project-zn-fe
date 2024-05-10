import React from 'react';
import MainContent from './MainContent/MainContent';
import Postingan from './Postingan/Postingan';
import './SideBar.css';

export default function SideBarMiddle() {
  return (
    <>
      <Postingan />
      <MainContent />
    </>
  );
}
