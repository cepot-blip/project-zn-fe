import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import UserItem from '../../../../components/fragment/UserItem';
import './Follow.css';

const followData = [
  { name: 'Mpoory', username: '@Mpoory' },
  { name: 'Mpoory', username: '@Mpoory' },
  { name: 'Mpoory', username: '@Mpoory' },
  { name: 'Mpoory', username: '@Mpoory' },
  { name: 'Mpoory', username: '@Mpoory' },
];

export default function Follow() {
  const location = useLocation();
  const pathname = location.pathname.split('/').filter(Boolean);
  if (!pathname[0]) pathname[0] = '';
  const hideWhenPath = ['message'];

  return (
    <div
      className={`shadow-md ${hideWhenPath.includes(pathname[pathname.length - 1]) ? 'hidden' : ''} w-fit border py-[5%] mt-8 px-[6%] rounded-md`}
    >
      <h1 className="font-bold">Follow</h1>
      <div className="flex flex-col gap-2 mt-3 w-full ">
        {followData.map((user, index) => (
          <UserItem key={user.name + index.toString()} user={user} />
        ))}
      </div>
      <div className="follow-2">
        <NavLink to="#">See more</NavLink>
      </div>
    </div>
  );
}
