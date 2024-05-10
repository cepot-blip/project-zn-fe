import { Image } from '@nextui-org/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Icons from '../../element/Icon';
import UserImg from '../../element/UserImg';
import ContentIconList from './ContentIconList';

export default function ContentBlock() {
  return (
    <div className="shadow-md rounded-md mt-8 border px-4 py-4">
      <div className="flex items-center gap-4">
        <NavLink to="#">
          <UserImg alt="user" />
        </NavLink>

        <div className="text-sm text-gray-600">
          <p>MProoy</p>
          <p className="p">3 hours ago</p>
        </div>
      </div>
      <div>
        <div className="mt-4">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore,
            aperiam quis consequatur explicabo veritatis nobis molestias odit
            asperiores iure itaque architecto minus quia, quisquam molestiae
            debitis fuga nam ab? Minima.
          </p>
          <div className="mt-4 flex overflow-hidden justify-center w-full max-w-[440px] bg-red-900 lg:h-64 md:h-48 h-32 rounded-md">
            <Image
              alt="NextUI hero Image"
              src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
              width={458}
              className="object-cover max-w-[458px] max-h-full  rounded-md"
            />
          </div>
          <div className="">
            <ul className="flex mt-4 gap-4">
              {Icons.map((item) => (
                <ContentIconList key={item.id} item={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
