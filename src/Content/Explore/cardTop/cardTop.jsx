import React from 'react';
import { NavLink } from 'react-router-dom';

export default function CardTop() {
  const categories = [
    { name: "Trending", path: "/trending" },
    { name: "For You", path: "/for-you" },
    { name: "News", path: "/news" },
    { name: "Sport", path: "/sport" },
    { name: "Lifestyle", path: "/lifestyle" },
    { name: "Technology", path: "/technology" },
    { name: "Tour", path: "/tour" }
  ];

  return (
    <div className="flex justify-evenly items-center shadow rounded px-3 w-full mb-4 ">
      {categories.map((category) => (
        <NavLink to={category.path} key={category.name} className="px-3 w-full">
          <p className="w-full font-bold border-transparent px-1.5 py-5 rounded hover:border-b border-[#3769A5] hover:duration-400">
            {category.name}
          </p>
        </NavLink>
      ))}
    </div>
  );
}
