import { CircleCheck } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import UserImg from '../../element/UserImg';

const data = [
  {
    name: 'Mpoory',
    username: '@telkomsel',
    date: '28 April',
    message: 'Telkomsel mahal doang tapi lemot yang bener aja, rugi dong!!',
  },
  {
    name: 'Mpoory',
    username: '@telkomsel',
    date: '28 April',
    message: 'Telkomsel mahal doang tapi lemot yang bener aja, rugi dong!!',
  },
  {
    name: 'Mpoory',
    username: '@telkomsel',
    date: '28 April',
    message: 'Telkomsel mahal doang tapi lemot yang bener aja, rugi dong!!',
  },
  {
    name: 'Mpoory',
    username: '@telkomsel',
    date: '28 April',
    message: 'Telkomsel mahal doang tapi lemot yang bener aja, rugi dong!!',
  },
  {
    name: 'Mpoory',
    username: '@telkomsel',
    date: '28 April',
    message: 'Telkomsel mahal doang tapi lemot yang bener aja, rugi dong!!',
  },
  {
    name: 'Mpoory',
    username: '@telkomsel',
    date: '28 April',
    message: 'Telkomsel mahal doang tapi lemot yang bener aja, rugi dong!!',
  },
  {
    name: 'Mpoory',
    username: '@telkomsel',
    date: '28 April',
    message: 'Telkomsel mahal doang tapi lemot yang bener aja, rugi dong!!',
  },
  {
    name: 'Mpoory',
    username: '@telkomsel',
    date: '28 April',
    message: 'Telkomsel mahal doang tapi lemot yang bener aja, rugi dong!!',
  },
  {
    name: 'Mpoory',
    username: '@telkomsel',
    date: '28 April',
    message: 'Telkomsel mahal doang tapi lemot yang bener aja, rugi dong!!',
  },
];

export default function ChatListContent() {
  return (
    <div className="mt-4">
      {data.slice(0, 9).map((item) => (
        <div
          key={item.id}
          className=" transition drop-shadow-sm rounded-md mt-1 border duration-300 transform hover:translate-y-[-1px] hover:bg-[#4C93F4]/20 hover:cursor-pointer p-2"
        >
          <div className="flex gap-4">
            <NavLink to="#">
              <UserImg
                size="lg"
                alt="profile"
                src="https://th.bing.com/th/id/OIP.Sw0g2adwtwCJAbIAveYGbgHaHa?rs=1&pid=ImgDetMain"
              />
            </NavLink>
            <div className="flex w-full flex-col justify-center">
              <div className="flex items-center gap-2">
                <CircleCheck
                  size={16}
                  strokeWidth={3}
                  className="text-[#3769A5]"
                />
                <p className="font-bold">{item.name}</p>
                <div className="text-gray-400 text-xs flex gap-1">
                  <p>{item.username}</p>
                </div>
              </div>
              <div className="flex w-full justify-between text-gray-400 text-sm">
                <p>{`${item.message.substring(0, 25)}...`}</p>
                <p>{item.date}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
