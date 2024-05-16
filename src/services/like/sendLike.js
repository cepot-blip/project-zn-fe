import axiosInstance from '../AxiosInstance';

export default async function sendandDeleteLike({ id, likeId }) {
  if (!likeId) {
    try {
      const res = await axiosInstance.post(
        `http://localhost:9000/api_v1/stories/${id}/like`,
        {},
      );
      return res.data;
    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.message);
      }

      if (error.request) {
        throw new Error({ error: 'No response from server' });
      }
      throw new Error({ error: error.message });
    }
  } else {
    try {
      const res = await axiosInstance.delete(
        `http://localhost:9000/api_v1/stories/${id}/like/${likeId}`,
      );
      return res.data;
    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.message);
      }

      if (error.request) {
        throw new Error({ error: 'No response from server' });
      }
      throw new Error({ error: error.message });
    }
  }
}
