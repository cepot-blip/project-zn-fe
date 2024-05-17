const createAuth = (set) => ({
  username: '',
  password: '',
  email: '',
  fullName: '',
  phoneNumber: '',
  loginInput: '',
  setReset: () =>
    set({
      username: '',
      password: '',
      email: '',
      fullName: '',
      phoneNumber: '',
      loginInput: '',
    }),
  setUsername: (username) => set({ username }),
  setPassword: (password) => set({ password }),
  setEmail: (email) => set({ email }),
  setFullName: (fullName) => set({ fullName }),
  setPhoneNumber: (phoneNumber) => set({ phoneNumber }),
  setLoginInput: (loginInput) => set({ loginInput }),
});

export default createAuth;
