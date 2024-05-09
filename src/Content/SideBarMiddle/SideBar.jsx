import React from 'react';
import MainContent from './MainContent/MainContent';
import Postingan from './Postingan/Postingan';
import './SideBar.css';

export default function SideBarMiddle() {
  return (
    <div className="border justify-self-start col-span-4 border-black p-[2.5%] w-full ">
      <Postingan />
      <MainContent />
    </div>
  );
}
