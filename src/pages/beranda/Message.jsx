import React from 'react';
import CardLeft from '../../Content/Message/cardLeft/cardLeft';
import CardRight from '../../Content/Message/cardRight/cardRight';

export default function Message() {
  return (
    <div className="flex justify-between absolute ">
      <div className="w-full m-2  shadow-md">
        <CardLeft />
      </div>
      <div className="w-full m-2  shadow-md">
        <CardRight />
      </div>
    </div>
  );
}
