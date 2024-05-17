import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export default function ExploreHeader() {
  const location = useLocation();
  const pathname = location.pathname.split('/').filter(Boolean);
  pathname[0] = '';
  const categories = [
    { name: 'Trending', path: '' },
    { name: 'For You', path: 'for-you' },
    { name: 'News', path: 'news' },
    { name: 'Sport', path: 'sport' },
    { name: 'Lifestyle', path: 'lifestyle' },
    { name: 'Technology', path: 'technology' },
    { name: 'Tour', path: 'tour' },
  ];

  return (
    <div className="flex justify-evenly border-b mb-2 items-center rounded w-full ">
      {categories.map((category) => (
        <NavLink
          to={category.path}
          className="w-full flex items-center justify-center text-center"
          key={category.name}
        >
          <p
            className={`w-full font-bold ${pathname[pathname.length - 1] === category.path && 'border-b-2 border-[#FF872E]'} py-4 hover:border-b-2 hover:border-[#FF872E] hover:duration-400`}
          >
            {category.name}
          </p>
        </NavLink>
      ))}
    </div>
  );
}
