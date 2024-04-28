import React from 'react';
import { Outlet } from 'react-router-dom';

function HomePage() {
  return (
    <div className="flex items-center justify-center bg-[#233691] h-screen">
      <div className="flex flex-col gap-4 text-white">
        <Outlet />
      </div>
    </div>
  );
}

export default HomePage;
