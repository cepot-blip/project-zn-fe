import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="flex items-center justify-center bg-[#233691] h-screen">
      <div className="flex flex-col gap-4 text-white">
        <h2>Hello Homepage</h2>
        <Link
          to="/protected"
          className="text-[#FF872E] border-2 border-[#FF872E] px-2 py-1"
        >
          Need Login to click me
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
