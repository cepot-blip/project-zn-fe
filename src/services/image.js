import axios from 'axios';
import Cookies from 'js-cookie';

const token = Cookies.get('token');

export default class imageService {
  static async uploadImage(image) {
    const formData = new FormData();
    formData.append('image', image);
    const res = await axios.post(
      'http://localhost:9000/api_v1/image-uploads',
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      },
    );

    return res.data;
  }
}
