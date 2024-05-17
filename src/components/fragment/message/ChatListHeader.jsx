import { Input } from '@nextui-org/react';
import React from 'react';

export default function ChatListHeader() {
  return (
    <div className="block w-full">
      <div className="mb-4 font-bold">MESSAGE</div>
      <div className=" min-w-full ">
        <Input type="text" label="Search User" labelPlacement="outside" />
      </div>
    </div>
  );
}
