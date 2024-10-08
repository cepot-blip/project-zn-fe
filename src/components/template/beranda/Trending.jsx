import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Trandding from '../../fragment/beranda/TrendingList';

const TranddingData = [
  { title: 'Sedang Trend Di USA', topic: 'UTBK', postCount: 120 },
  { title: 'Sedang Trend Di ASA', topic: 'UTBK', postCount: 120 },
  { title: 'Sedang Trend Di USI', topic: 'UTBK', postCount: 120 },
  { title: 'Sedang Trend Di AES', topic: 'UTBK', postCount: 120 },
  { title: 'Sedang Trend Di ASAW', topic: 'UTBK', postCount: 120 },
  { title: 'Sedang Trend Di XXA', topic: 'UTBK', postCount: 120 },
];
export default function Trending() {
  const location = useLocation();
  const pathname = location.pathname.split('/').filter(Boolean);
  if (!pathname[0]) pathname[0] = '';
  const hideWhenPath = ['explore', 'message'];
  return (
    <div
      className={`top ${hideWhenPath.includes(pathname[pathname.length - 1]) ? 'hidden' : ''} shadow-md w-full border py-[5%] px-[6%] rounded-md`}
    >
      <h1 className="font-bold text-base">Trending</h1>
      <div className="flex flex-col gap-2 mt-3 w-full">
        {TranddingData.map((data) => (
          <Trandding key={data.title} data={data} />
        ))}
      </div>
      <div className="text-blue-600 mt-4">
        <NavLink to="/explore">See more</NavLink>
      </div>
    </div>
  );
}
