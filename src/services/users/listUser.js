import axiosInstance from '../AxiosInstance';

export default async function listUser() {
  try {
    const res = await axiosInstance.post('/users/get');
    return res.data;
  } catch (error) {
    if (error.response) {
      return { error: error.response.data };
    }

    if (error.request) {
      return { error: 'No response from server' };
    }
    return { error: error.message };
  }
}
