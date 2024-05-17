import { Info } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function ChatUserHeader() {
  return (
    <div className="w-full border-b border-black p-4 ">
      <div className="flex items-center justify-between">
        <p className="font-bold">Mprooy</p>
        <NavLink to="#">
          <Info size={16} strokeWidth={1.5} className="text-blue-700" />
        </NavLink>
      </div>
      <div className="flex items-center justify-center text-center mt-4 ">
        <NavLink to="#">
          <img
            className="flex object-cover w-20 h-20 transition-opacity duration-500 opacity-0 data-[loaded=true]:opacity-100"
            alt="profile"
            data-loaded="true"
            src="https://th.bing.com/th/id/OIP.Sw0g2adwtwCJAbIAveYGbgHaHa?rs=1&amp;pid=ImgDetMain"
          />
        </NavLink>
      </div>
      <div className="text-center mt-3 block">
        <p className="font-bold">Mprooy</p>
        <p className="text-gray-400 text-xs">@mprooy</p>
        <p className="text-black">
          Hey there i am using WatshApp! . 10k followers
        </p>
        <p className="text-black">join on 20 jan 2024</p>
      </div>
    </div>
  );
}
