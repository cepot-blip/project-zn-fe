import axios from 'axios';
import Cookies from 'js-cookie';

export default async function listUser() {
  try {
    const res = await axios.post(
      'http://localhost:9000/api_v1/users/get',
      {}, // Data dikirimkan sebagai objek kedua
      {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`,
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      },
    );
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
