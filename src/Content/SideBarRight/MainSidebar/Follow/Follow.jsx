import React from 'react';
import './Follow.css';
import UserItem from '../../../../components/fragment/UserItem';
import Link from '../../../../components/element/Link';

const followData = [
  { name: 'Mpoory', username: '@Mpoory' },
  { name: 'Mpoory', username: '@Mpoory' },
  { name: 'Mpoory', username: '@Mpoory' },
  { name: 'Mpoory', username: '@Mpoory' },
  { name: 'Mpoory', username: '@Mpoory' },
  { name: 'Mpoory', username: '@Mpoory' },
];

const Follow = () => {
  return (
    <div className="follow">
      <h1>Follow</h1>
      {followData.map((user, index) => (
        <UserItem key={index} user={user} />
      ))}
      <div className="follow-2">
        <Link>See more</Link>
      </div>
    </div>
  );
};

export default Follow;
