const categorySlice = (set) => ({
  category_id: '',
  setCategoryId: (category_id) => set(() => ({ category_id })),
});

export default categorySlice;
