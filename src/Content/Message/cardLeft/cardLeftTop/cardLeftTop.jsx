import React from 'react';
import Input from '../../../../components/element/Input';

export default function CardLeftTop() {
  return (
      <div className="block w-full">
        <div className="mb-4 font-bold">MESSAGE</div>
        <div className=" min-w-full ">
        <Input
            className="rounded-xl w-full  "
            size="sm"
            type="text"
            label="Direct Message"
            placeholder=" "
          />
        </div>
      </div>
  );
}


