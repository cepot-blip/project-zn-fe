import axiosInstance from '../AxiosInstance';

export default async function getStory() {
  try {
    const res = await axiosInstance.get('/stories');
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
