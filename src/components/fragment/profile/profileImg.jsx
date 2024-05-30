import React from 'react';
import { NavLink } from 'react-router-dom';

export default function ProfileImg() {
  return (
    <div className="h-[300px]">
      <NavLink to="#" className="w-full flex">
        <img
          className="object-cover w-full h-[200px] rounded-md"
          alt="NextUI hero"
          src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
        />
      </NavLink>
      <div className="flex justify-between">
        <div className="w-[150px] h-[150px]  rounded-full -translate-y-20 translate-x-10 border-4 border-white">
          <NavLink to="#">
            <img
              className="object-cover w-[143px] h-[140px]  rounded-full "
              alt="NextUI hero"
              src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
            />
          </NavLink>
        </div>
        <NavLink
          to="#"
          className="bg-white border border-black h-1/2 py-2 px-8 text-sm mr-5 mt-2 font-semibold text-black rounded-full"
        >
          <button type="button">Edit Profile</button>
        </NavLink>
      </div>
    </div>
  );
}
