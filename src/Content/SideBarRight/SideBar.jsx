import { ChevronUp, Ellipsis } from 'lucide-react';
import React from 'react';
import { toast } from 'react-toastify';
import Follow from './MainSidebar/Follow/Follow';
import Trandding from './MainSidebar/Trandding/Trandding';
import './SideBar.css';

export default function SideBarRigt() {
  const handleClick = () => {
    toast.success('Coming Soon');
  };
  return (
    <div className="h-screen w-72 justify-self-center col-span-2 pt-4">
      <Trandding />
      <Follow />
      <div className="w-72 bg-[#3769A5] rounded-md h-[42px] flex items-center pl-4 pr-2 mt-2 fixed bottom-2 right-6">
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-2">
            <img
              className="w-[27px] h-[27px]"
              src="/profile.png"
              alt="profile"
            />
            <p className="text-white">Message</p>
          </div>
          <div className="flex gap-2 items-center">
            <button aria-label="more" type="button" onClick={handleClick}>
              <Ellipsis size={32} strokeWidth={1.5} className="text-white" />
            </button>
            <button aria-label="chat" type="button" onClick={handleClick}>
              <img src="/Chat_plus_fill.svg" alt="" className="" />
            </button>
            <button aria-label="up" type="button" onClick={handleClick}>
              <ChevronUp size={24} strokeWidth={2} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
