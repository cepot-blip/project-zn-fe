import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../../components/element/Button';
import UserImg from '../../../components/element/UserImg';

const iconPostingan = [
  'Imagesmode.svg',
  'Emotions.svg',
  'Gifbox.svg',
  'Location.svg',
  'Chart.svg ',
];

export default function Postingan() {
  return (
    <div className="shadow-md rounded-md border pl-3 p-5">
      <div className="flex gap-4">
        <UserImg alt="profile" />
        <textarea
          type="text"
          placeholder="Apa Yang Anda Pikirkan ?!"
          className="h-20 w-[90%] p-2"
        />
      </div>
      <div className="mt-2">
        <div className="flex justify-between px-4 items-center">
          <ul className="ml-10 flex gap-4 items-center">
            {iconPostingan.map((icon) => (
              <li key={icon}>
                <NavLink to="#">
                  <img src={icon} alt="icon" />
                </NavLink>
              </li>
            ))}
          </ul>
          <Button fullrounded className="w-32 h-10 bg-[#3769A5] ">
            Post
          </Button>
        </div>
      </div>
    </div>
  );
}
