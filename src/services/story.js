import axiosInstance from './AxiosInstance';

export default class storyService {
  static async createStory({ title, content, image_link }) {
    try {
      const res = await axiosInstance.post(
        'http://localhost:9000/api_v1/stories',
        {
          title,
          content,
          image_link,
          category_id: 5,
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
