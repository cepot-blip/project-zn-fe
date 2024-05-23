import axiosInstance from './AxiosInstance';

export default class storyService {
  static async createStory({ category_id, content, image_link }) {
    try {
      const res = await axiosInstance.post(
        'http://localhost:9000/api_v1/stories',
        {
          content,
          image_link,
          category_id,
        },
      );
      return res.data;
    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.message);
      }
      throw new Error(error);
    }
  }

  static async getStory() {
    try {
      const res = await axiosInstance.get('/stories');
      return res.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
