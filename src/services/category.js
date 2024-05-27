import axiosInstance from './AxiosInstance';

export default class categoryService {
  static async getCategory() {
    const url = 'http://localhost:9000/api_v1/category';
    try {
      const res = await axiosInstance.get(url);
      return res.data;
    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.message);
      }
      throw new Error(error);
    }
  }
}
