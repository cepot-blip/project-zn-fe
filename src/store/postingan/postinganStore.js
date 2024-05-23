import { create } from 'zustand';
import categorySlice from './categorySlice';
import contentSlice from './contentSlice';

const usePostinganStore = create((...a) => ({
  ...categorySlice(...a),
  ...contentSlice(...a),
}));

export default usePostinganStore;
