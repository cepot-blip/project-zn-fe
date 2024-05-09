import React from 'react';

import Cookies from 'js-cookie';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import SideBarMiddle from '../Content/SideBarMiddle/SideBar';
import HomePage from '../pages/app';
import Beranda from '../pages/beranda/Beranda';

const token = Cookies.get('token');

const modules = import.meta.glob('/src/pages/**/[a-z[]*.jsx', { eager: true });

const pages = Object.keys(modules)
  .map((mod) => {
    if (!mod.includes('app')) {
      const path = mod
        .replace(/\/src\/pages|app|index|\.jsx$/g, '')
        .replace(/\[\.{3}.+\]/, '*')
        .replace(/\[(.+)\]/, ':$1');

      const Element = modules[mod].default;
      return {
        path,
        element: <Element />,
      };
    }
    return false;
  })
  .filter((page) => !!page);

const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    children: [...pages],
  },
  {
    path: 'protected',
    element: token ? <div>Protected Layout</div> : <Navigate to="/login" />,
  },
  {
    path: 'beranda',
    element: <Beranda />,
    children: [
      {
        path: '',
        index: true,
        element: <SideBarMiddle />,
      },

      {
        path: 'explore',
        element: (
          <div className="border justify-self-start col-span-4 border-black p-[2.5%] w-full ">
            <p>explore page</p>
          </div>
        ),
      },
    ],
  },
]);

export default routes;
