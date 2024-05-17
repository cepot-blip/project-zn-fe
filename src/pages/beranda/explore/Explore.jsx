import React from 'react';
import { Outlet } from 'react-router-dom';
import ExploreHeader from '../../../components/fragment/explore/ExploreHeader';
import ExploreHero from '../../../components/fragment/explore/ExploreHero';

export default function Explore() {
  return (
    <>
      <ExploreHeader />
      <ExploreHero />
      <Outlet />
    </>
  );
}
