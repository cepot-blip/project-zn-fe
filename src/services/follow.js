import axiosInstance from './AxiosInstance';

export default class followService {
  static async sendFollow(id) {
    try {
      const res = await axiosInstance.post(`/users/${id}/following`);
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

  static async getFollow(id) {
    try {
      const res = await axiosInstance.get(`/users/${id}/following`);
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
}
