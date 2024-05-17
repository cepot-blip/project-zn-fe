import { create } from 'zustand';

export const useUserStore = create((set) => ({
  userData: {
    username: '',
    email: '',
    phone_number: '',
    fullName: '',
    profilePicture: '',
  },
  setUserData: (data) => set({ userData: data }),
}));

export const comingsoon = 'jdjd';
