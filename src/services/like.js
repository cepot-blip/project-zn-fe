import axiosInstance from './AxiosInstance';

export default class likeService {
  static async getLike() {
    try {
      const res = await axiosInstance.get('/like');

      return res.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async sendandDeleteLike({ id, likeId }) {
    const url = likeId
      ? `http://localhost:9000/api_v1/stories/${id}/like/${likeId}`
      : `http://localhost:9000/api_v1/stories/${id}/like`;

    try {
      const res = likeId
        ? await axiosInstance.delete(url)
        : await axiosInstance.post(url, {});
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
