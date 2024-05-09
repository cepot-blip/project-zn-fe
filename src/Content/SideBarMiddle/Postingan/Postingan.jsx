import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../../components/element/Button';
import UserImg from '../../../components/element/UserImg';
import './Postingan.css';

const iconPostingan = [
  'Imagesmode.svg',
  'Emotions.svg',
  'Gifbox.svg',
  'Location.svg',
  'Chart.svg ',
];

export default function Postingan() {
  return (
    <div className="postingan">
      <div className="postingan-1">
        <UserImg src="profile.png" alt="profile" />

        <input
          type="text"
          placeholder="Apa Yang Anda Pikirkan ?!"
          className="postingan-1-2"
        />
      </div>
      <div className="Postingan-2">
        <div className="postingan-2-1">
          <ul className="ml-10">
            {iconPostingan.map((icon) => (
              <li key={icon}>
                <NavLink to="#">
                  <img src={icon} alt="icon" />
                </NavLink>
              </li>
            ))}
            <Button fullrounded className="button w-32 h-10 bg-[#3769A5] ">
              Post
            </Button>
          </ul>
        </div>
      </div>
    </div>
  );
}
