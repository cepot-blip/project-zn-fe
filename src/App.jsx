import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React, { Suspense } from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { Flip, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import SideBarMiddle from './Content/SideBarMiddle/SideBar';
import AuthProvider from './context/AuthContext';
import Beranda from './pages/beranda/Beranda';
import Explore from './pages/beranda/Explore';
import Message from './pages/beranda/Message';
import Login from './pages/login/index';
import Signup from './pages/register/index';
import SetProfile from './pages/register/set-profile';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Outlet />}>
                <Route index element={<Signup />} />
                <Route path="set-profile" element={<SetProfile />} />
              </Route>
              <Route element={<Beranda />}>
                <Route index element={<SideBarMiddle />} />
                <Route path="explore" element={<Explore />} />
                <Route path="message" element={<Message />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </AuthProvider>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Flip}
        toastClassName="text-black border-[#233691]"
      />
    </QueryClientProvider>
  );
}

export default App;
