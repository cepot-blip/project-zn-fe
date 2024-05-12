import axios from 'axios';
import Cookies from 'js-cookie';

export default async function userLoginData() {
  const token = Cookies.get('token');
  try {
    const res = await axios.get('http://localhost:9000/api_v1/users/auth', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
