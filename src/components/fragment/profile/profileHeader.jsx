import React from 'react';
import { MoveLeft } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function ProfileHeader() {
  return (
    <div className="w-full p-4 flex justify-start">
      <div className="p-4">
        <NavLink to="/profile">
          <MoveLeft className="text-blue-600" size={26} />
        </NavLink>
      </div>
      <div className="block p-2">
        <p className="text-xl text-slate-900 font-semibold">Mprooy</p>
        <p className="text-sm text-slate-400">37 Story</p>
      </div>
    </div>
  );
}
