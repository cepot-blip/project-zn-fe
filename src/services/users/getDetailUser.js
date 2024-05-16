import axiosInstance from '../AxiosInstance';

export default async function getDetailUser(id) {
  try {
    const res = await axiosInstance.get(`/users/get-byid/${id}`);
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
