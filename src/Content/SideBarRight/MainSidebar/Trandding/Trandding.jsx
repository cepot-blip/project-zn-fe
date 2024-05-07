import React from 'react';
import './Trandding.css';
import Trandding from '../../../../components/element/Trandding';
import Link from '../../../../components/element/Link';

const TranddingData = [
  { title: 'Sedang Trend Di USA', topic: 'UTBK', postCount: 120 },
  { title: 'Sedang Trend Di USA', topic: 'UTBK', postCount: 120 },
  { title: 'Sedang Trend Di USA', topic: 'UTBK', postCount: 120 },
  { title: 'Sedang Trend Di USA', topic: 'UTBK', postCount: 120 },
  { title: 'Sedang Trend Di USA', topic: 'UTBK', postCount: 120 },
  { title: 'Sedang Trend Di USA', topic: 'UTBK', postCount: 120 },
];

const Top = () => {
  return (
    <div className="top">
      <h1>Trandding</h1>
      {TranddingData.map((data, index) => (
        <Trandding key={index} data={data} />
      ))}
      <div className="top-2">
        <Link>See more</Link>
      </div>
    </div>
  );
};

export default Top;
