import React from 'react';
import CardRightTop from './cardRightTop/cardRightTop';
import CardRightMiddle from './cardRightMiddle/cardRightMiddle';
import CardRightBottom from './cardRightBotton/cardRightButton';

export default function CardRight() {
  return (
    <div className="flex px-8  border-xl relative w-full ">
      <div className="block w-full">
        <CardRightTop />
        <CardRightMiddle />
        <CardRightBottom />
      </div>
    </div>
  );
}
