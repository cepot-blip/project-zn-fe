import React from 'react';

import Cookies from 'js-cookie';
import {
  Navigate,
  Outlet,
  createBrowserRouter,
  redirect,
} from 'react-router-dom';
import { toast } from 'react-toastify';
import ProtectedLayout from '../components/template/ProtectedLayout';
import Login from '../pages/Login';
import HomePage from '../pages/app';
import Register from '../pages/register/Register';
import SetProfile from '../pages/register/SetProfile';
import Welcome from '../pages/register/Welcome';
import { loginUser } from '../services/AuthUser';

const token = Cookies.get('token');

async function registerAction() {
  // const formData = await request.formData();

  // const username = formData.get('username');
  // const email = formData.get('email');
  // const password = formData.get('password');
  // const res = await createUser({ username, email, password });
  // if (!res.success) {
  //   return res.error;
  // }

  // if (res.status === false) {
  //   return res.message;
  // }

  // Cookies.set('token', res.data.token);
  // toast.success('Register Success');
  return redirect('/register/set-profile');
}

async function loginAction({ request }) {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');
  const res = await loginUser({ email, password });
  if (!res.success) {
    toast.error(res.error.msg);
    return null;
  }
  return redirect('/dashboard');
}

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
    element: (
      <ProtectedLayout>
        <HomePage />
      </ProtectedLayout>
    ),

    children: [
      ...pages,
      {
        path: 'dashboard',
        element: <div>Dashboard</div>,
        index: true,
      },
    ],
  },
  {
    path: 'login',
    element: token ? <Navigate to="/" /> : <Login />,
    action: loginAction,
  },
  {
    path: 'register',
    element: <Outlet />,
    children: [
      {
        path: '',
        element: token ? <Navigate to="/dashboard" /> : <Register />,
        action: registerAction,
        index: true,
      },
      {
        path: 'set-profile',
        element: <SetProfile />,
      },
      {
        path: 'welcome',
        element: <Welcome />,
      },
    ],
  },
]);

export default routes;
