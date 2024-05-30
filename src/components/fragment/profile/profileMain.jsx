import React from 'react';
import { Calendar } from 'react-feather';
import { NavLink } from 'react-router-dom';
export default function ProfileMain() {
  return (
    <div className="w-full pl-8">
      <div className="flex pt-4 pb-2 border-b-1 border-black">
        <Calendar width={30} />
        <p className="text-slate-400 tex-sm">Joined January 2020</p>
      </div>
      <div
        className="flex justify-evenly pt-2"
        style={{ position: 'relative' }}
      >
        <NavLink to="#">
          <p className="font-semibold text-lg hover:border-b-5 hover:border-blue-500 rounded">
            Story
          </p>
        </NavLink>
        <NavLink to="#">
          <p className="font-semibold text-lg hover:border-b-5 hover:border-blue-500 rounded">
            Replay
          </p>
        </NavLink>
        <NavLink to="#">
          <p className="font-semibold text-lg hover:border-b-5 hover:border-blue-500 rounded">
            Media
          </p>
        </NavLink>
        <NavLink to="#">
          <p className="font-semibold text-lg hover:border-b-5 hover:border-blue-500 rounded">
            Like
          </p>
        </NavLink>
      </div>
    </div>
  );
}
