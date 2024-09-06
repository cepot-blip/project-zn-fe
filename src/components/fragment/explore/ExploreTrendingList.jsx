import React from 'react';
import Trandding from '../beranda/TrendingList';

const TrendingData = [
  { id: 1, title: 'Sedang Trend Di USA', topic: 'UTBK', postCount: 120 },
  { id: 2, title: 'Sedang Trend Di ASA', topic: 'UTBK', postCount: 120 },
  { id: 3, title: 'Sedang Trend Di USI', topic: 'UTBK', postCount: 120 },
  { id: 4, title: 'Sedang Trend Di AES', topic: 'UTBK', postCount: 120 },
  { id: 5, title: 'Sedang Trend Di ASAW', topic: 'UTBK', postCount: 120 },
  { id: 6, title: 'Sedang Trend Di XXA', topic: 'UTBK', postCount: 120 },
];

export default function ExploreTrendingList() {
  return (
    <div className="p-4">
      <div className="text-2xl font-bold">Trending</div>
      <div className="mt-4">
        {TrendingData.map((data) => (
          <Trandding key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
}
