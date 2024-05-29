import axiosInstance from './AxiosInstance';

export default class bookmarkService {
  static async addorRemoveBookmark(id) {
    const res = await axiosInstance.put(`stories/${id}/bookmarks`);
    return res.data;
  }

  static async getBookmarks() {
    const res = await axiosInstance.get('/bookmarks');
    return res.data;
  }
}
