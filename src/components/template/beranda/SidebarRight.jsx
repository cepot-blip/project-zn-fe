import { Image } from '@nextui-org/react';
import { ChevronUp, Ellipsis } from 'lucide-react';
import React from 'react';
import { toast } from 'react-toastify';
import Follow from './Follow';
import Trandding from './Trending';

export default function SidebarRight() {
  const handleClick = () => {
    toast.success('Coming Soon');
  };
  return (
    <div className="h-screen hidden lg:flex flex-col items-center px-2 w-[25rem] pt-4">
      <Trandding />
      <Follow />
      <div className="w-full max-w-64 bg-[#3769A5] rounded-md h-[42px] flex items-center pl-4 pr-2 mt-2 fixed bottom-2 right-6">
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-2">
            <div className="flex rounded-full max-w-[27px] max-h-[27px]">
              <Image
                className=" object-cover"
                width={27}
                height={27}
                src="https://th.bing.com/th/id/OIP.Sw0g2adwtwCJAbIAveYGbgHaHa?rs=1&pid=ImgDetMain"
                alt="profile"
              />
            </div>
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
