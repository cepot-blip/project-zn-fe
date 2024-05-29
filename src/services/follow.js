import axiosInstance from './AxiosInstance';

export default class followService {
  static async FollowOrUnfollow({ id, followId }) {
    if (followId) {
      const res = axiosInstance.delete(`/users/${id}/following/${followId}`);
      return res.data;
    }

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

  static async checkFollow(id) {
    try {
      const res = await axiosInstance.get(`/users/${id}/checkfollowing`);
      return res.data.data;
    } catch (error) {
      if (error.response.status === 400) {
        return {
          status: 200,
          data: error.response.data,
        };
      }
      throw error;
    }
  }
}
