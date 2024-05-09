import { Image } from '@nextui-org/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Icons from '../../element/Icon';
import UserImg from '../../element/UserImg';
import './ContentBlock.css';

export default function ContentBlock() {
  return (
    <div className="MainContent-1">
      <div className="MainContent-1-1">
        <NavLink to="#">
          <UserImg src="profile.png" alt="user" />
        </NavLink>

        <div className="MainContent-1-1-2">
          <p>MProoy</p>
          <p className="p">3 hours ago</p>
        </div>
      </div>
      <div className="MainContent-1-2">
        <div className="MainContent-1-2-2">
          <p>Text</p>
          <div className="block w-96 max-w-[458px] lg:h-64 md:h-48 h-32  rounded-md">
            <Image
              alt="NextUI hero Image"
              width={458}
              src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
            />
          </div>
          <div className="MainContent-1-2-2-2">
            <ul className="flex mt-4 gap-4">
              {Icons.map((item) => (
                <li className="flex items-center gap-1" key={item.id}>
                  {item.icon} <p className="text-xs text-gray-400">3300</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
