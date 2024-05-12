import axiosInstance from '../AxiosInstance';

export default async function getLike({ id }) {
  try {
    const res = await axiosInstance.get(
      `http://localhost:9000/api_v1/stories/${id}/like`,
    );

    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
