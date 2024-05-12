import axios from 'axios';
import Cookies from 'js-cookie';

export default async function sendandDeleteLike({ id, likeId }) {
  if (!likeId) {
    try {
      const res = await axios.post(
        `http://localhost:9000/api_v1/stories/${id}/like`,
        {},
        {
          headers: {
            Authorization: `Bearer ${Cookies.get('token')}`,
            'Content-Type': 'application/json',
          },
        },
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
      const res = await axios.delete(
        `http://localhost:9000/api_v1/stories/${id}/like/${likeId}`,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get('token')}`,
            'Content-Type': 'application/json',
          },
        },
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
