import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import UseGetUser from '../../../hook/users/useUser';
import { useUserStore } from '../../../store/user/store';
import UserItem from '../../fragment/beranda/UserItem';

// const followData = [
//   { name: 'Mpoory', username: '@Mpoory' },
//   { name: 'Mpoory', username: '@Mpoory' },
//   { name: 'Mpoory', username: '@Mpoory' },
//   { name: 'Mpoory', username: '@Mpoory' },
//   { name: 'Mpoory', username: '@Mpoory' },
// ];

export default function Follow() {
  const userData = useUserStore((state) => state.userData);
  const { data: followData } = UseGetUser();

  const location = useLocation();
  const pathname = location.pathname.split('/').filter(Boolean);
  if (!pathname[0]) pathname[0] = '';
  const hideWhenPath = ['message'];

  return (
    <div
      className={`shadow-md ${hideWhenPath.includes(pathname[pathname.length - 1]) ? 'hidden' : ''} w-full border py-[5%] mt-8 px-[6%] rounded-md`}
    >
      <h1 className="font-bold">Follow</h1>
      <div className="flex flex-col gap-2 mt-3 w-full ">
        {followData?.query?.map((user, index) => (
          <UserItem
            key={user.name + index.toString()}
            user={user}
            currentUser={userData}
          />
        ))}
      </div>
      <div className="text-blue-600 mt-4">
        <NavLink to="#">See more</NavLink>
      </div>
    </div>
  );
}
