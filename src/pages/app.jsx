import axios from 'axios';
import Cookies from 'js-cookie';
import React from 'react';
import { Outlet } from 'react-router-dom';

function HomePage() {
  const { data = [] } = useUser();
  const token = Cookies.get('token');

  async function handleGetUser() {
    try {
      const res = await axios.post(
        'http://localhost:9000/api_v1/users/get',
        {}, // Data dikirimkan sebagai objek kedua
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        },
      );

      return res.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  return (
    <div className="flex items-center justify-center bg-[#233691] h-screen">
      <div className="flex flex-col gap-4 text-white">
        <Outlet />
      </div>
    </div>
  );
}

export default HomePage;
