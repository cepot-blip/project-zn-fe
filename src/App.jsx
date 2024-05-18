import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { Flip, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Loading from './components/element/Loading';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

const Login = lazy(() => import('./pages/login/index'));
const Signup = lazy(() => import('./pages/register/index'));
const SetProfile = lazy(() => import('./pages/register/set-profile/index'));
const Beranda = lazy(() => import('./pages/beranda/Beranda'));
const Explore = lazy(() => import('./pages/beranda/explore/Explore'));
const MainContent = lazy(() => import('./pages/beranda/story/MainContent'));
const Message = lazy(() => import('./pages/beranda/Message'));
const ExploreTrending = lazy(
  () => import('./components/template/explore/ExploreTrending'),
);
const ExploreForYou = lazy(
  () => import('./components/template/explore/ExploreForYou'),
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Outlet />}>
              <Route index element={<Signup />} />
              <Route path="set-profile" element={<SetProfile />} />
            </Route>
            <Route element={<Beranda />}>
              <Route index element={<MainContent />} />
              <Route path="explore" element={<Explore />}>
                <Route index element={<ExploreTrending />} />
                <Route path="for-you" element={<ExploreForYou />} />
              </Route>
              <Route path="message" element={<Message />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
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
