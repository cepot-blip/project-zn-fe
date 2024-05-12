import axiosInstance from '../AxiosInstance';

export default async function userLoginData() {
  try {
    const res = await axiosInstance.get('/users/auth');
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
