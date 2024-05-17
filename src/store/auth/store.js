import { create } from 'zustand';
import createAuth from './authStore';

const useAuthStore = create((...a) => ({
  ...createAuth(...a),
}));

export default useAuthStore;
