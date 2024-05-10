import React from 'react';

import Cookies from 'js-cookie';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import SideBarMiddle from '../Content/SideBarMiddle/SideBar';
import HomePage from '../pages/app';
import Beranda from '../pages/beranda/Beranda';
import Explore from '../pages/beranda/Explore';
import Message from '../pages/beranda/Message';

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
    children: [
      ...pages,
      {
        path: '',
        element: <Beranda />,
        children: [
          {
            path: '',
            index: true,
            element: <SideBarMiddle />,
          },

          {
            path: 'explore',
            element: <Explore />,
          },
          {
            path: 'message',
            element: <Message />,
          },
        ],
      },
    ],
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
        element: <Explore />,
      },
    ],
  },
]);

export default routes;
