import axiosInstance from './AxiosInstance';

export default class categoryService {
  static async createCategory({ category_name, description }) {
    try {
      const res = await axiosInstance.post(
        'http://localhost:9000/api_v1/category',
        {
          category_name,
          description,
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
}
