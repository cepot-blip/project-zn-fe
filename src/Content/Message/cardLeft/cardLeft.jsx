import React from 'react';
import CardLeftTop from './cardLeftTop/cardLeftTop';
import CardLeftButton from './cardLeftButton/cardLeftButton';

export default function CardLeft() {
  return (
    <div className="flex px-8 relative w-full">
      <div className="grid w-full">
        <CardLeftTop />
        <CardLeftButton />
      </div>
    </div>
  );
}
