import React from 'react';
import { NavLink } from 'react-router-dom';
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
  return (
    <div className="follow">
      <h1 className="font-bold">Follow</h1>
      <div className="flex flex-col gap-2 mt-3">
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
