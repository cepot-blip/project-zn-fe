import { CircleCheck } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const data = [
  {
    name: 'Mpoory',
    username: '@telkomsel',
    date: '28 April 2024',
    message: 'Telkomsel mahal doang tapi lemot yang bener aja, rugi dong!!',
  },
  {
    name: 'Mpoory',
    username: '@telkomsel',
    date: '28 April 2024',
    message: 'Telkomsel mahal doang tapi lemot yang bener aja, rugi dong!!',
  },
  {
    name: 'Mpoory',
    username: '@telkomsel',
    date: '28 April 2024',
    message: 'Telkomsel mahal doang tapi lemot yang bener aja, rugi dong!!',
  },
  {
    name: 'Mpoory',
    username: '@telkomsel',
    date: '28 April 2024',
    message: 'Telkomsel mahal doang tapi lemot yang bener aja, rugi dong!!',
  },
  {
    name: 'Mpoory',
    username: '@telkomsel',
    date: '28 April 2024',
    message: 'Telkomsel mahal doang tapi lemot yang bener aja, rugi dong!!',
  },
];

export default function ChatListContent() {
  return (
    <>
      {data.map((item) => (
        <div
          key={item.id}
          className="grid grid-cols-5 w-full mt-6 p-2 border-xl shadow-md rounded-md relative transition duration-300 transform hover:translate-y-[-10px] hover:bg-[#4C93F4]/20"
        >
          <div className="col-span-1 w-3/4 flex items-center justify-center">
            <NavLink to="#">
              <img
                className="w-16 h-16 rounded-full"
                alt="profile"
                src="https://th.bing.com/th/id/OIP.Sw0g2adwtwCJAbIAveYGbgHaHa?rs=1&pid=ImgDetMain"
              />
            </NavLink>
          </div>
          <div className="col-span-4">
            <NavLink to="#">
              <div className="flex items-center">
                <p className="font-bold mr-2">{item.name}</p>
                <CircleCheck
                  size={16}
                  strokeWidth={3}
                  className="text-[#3769A5]"
                />
                <div className="text-gray-400 text-xs flex items-center ">
                  <p className="mr-1">{item.username}</p>
                  <p className="mr-1">.</p>
                  <p className="mr-1">{item.date}</p>
                </div>
              </div>
              <div>
                <p className="text-gray-400 text-sm">{item.message}</p>
              </div>
            </NavLink>
          </div>
        </div>
      ))}
    </>
  );
}
