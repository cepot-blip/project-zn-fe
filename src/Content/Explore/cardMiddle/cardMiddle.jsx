import React from 'react';
import { NavLink } from 'react-router-dom';

export default function CardMiddle() {
  return (
    <div className="flex w-full">
      <NavLink to="#" className="w-full">
        <img
          className="object-cover  max-h-[440px] w-full "
          alt="NextUI hero"
          src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
        />
      </NavLink>
    </div>
  );
}
