import React from 'react';
import { NavLink } from 'react-router-dom';

export default function ExploreHero() {
  return (
    <div className="flex w-full max-h-60 h-60 ">
      <NavLink to="#" className="w-full flex">
        <img
          className="object-cover w-full rounded-md"
          alt="NextUI hero"
          src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
        />
      </NavLink>
    </div>
  );
}
