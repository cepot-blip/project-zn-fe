import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Trandding from '../../../../components/element/Trandding';
import './Trandding.css';

const TranddingData = [
  { title: 'Sedang Trend Di USA', topic: 'UTBK', postCount: 120 },
  { title: 'Sedang Trend Di ASA', topic: 'UTBK', postCount: 120 },
  { title: 'Sedang Trend Di USI', topic: 'UTBK', postCount: 120 },
  { title: 'Sedang Trend Di AES', topic: 'UTBK', postCount: 120 },
  { title: 'Sedang Trend Di ASAW', topic: 'UTBK', postCount: 120 },
  { title: 'Sedang Trend Di XXA', topic: 'UTBK', postCount: 120 },
];
export default function Top() {
  const location = useLocation();
  const pathname = location.pathname.split('/').filter(Boolean);
  if (!pathname[0]) pathname[0] = '';
  return (
    <div
      className={`top ${pathname[pathname.length - 1] === 'explore' || pathname[pathname.length - 1] === 'message' ? 'hidden' : ''} shadow-md w-full border py-[5%] px-[6%] rounded-md`}
    >
      <h1 className="font-bold text-base">Trending</h1>
      {TranddingData.map((data) => (
        <Trandding key={data.title} data={data} />
      ))}
      <div className="top-2">
        <NavLink to="#">See more</NavLink>
      </div>
    </div>
  );
}
