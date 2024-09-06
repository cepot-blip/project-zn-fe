import React from 'react';
import ProfileHeader from '../../../components/fragment/profile/profileHeader';
import ProfileImg from '../../../components/fragment/profile/profileImg';
import ProfileHero from '../../../components/fragment/profile/profileHero';
import ProfileMain from '../../../components/fragment/profile/profileMain';

export default function Profile() {
  return (
    <div>
      <ProfileHeader />
      <ProfileImg />
      <ProfileHero />
      <ProfileMain />
    </div>
  );
}
