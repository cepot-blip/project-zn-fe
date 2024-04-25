import React from 'react';

export default function Input(props) {
  return (
    <input
      {...props}
      className="bg-white rounded-[10px]  h-14 pl-4 w-full flex items-center"
    />
  );
}
