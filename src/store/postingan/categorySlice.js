const categorySlice = (set) => ({
  category: {
    category_name: '',
    description: '',
  },
  setCategoryName: (name) =>
    set((state) => ({ category: { ...state.category, category_name: name } })),
  setCategoryDesc: (desc) =>
    set((state) => ({ category: { ...state.category, description: desc } })),
});

export default categorySlice;
