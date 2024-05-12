import axios from 'axios';
import Cookies from 'js-cookie';

export default async function loginUser({ email, password }) {
  try {
    const response = await axios.post(
      'http://localhost:9000/api_v1/users/login',
      {
        email,
        password,
      },
    );
    Cookies.set('token', response.data.token);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.error);
    }
    throw new Error(error.message);
  }
}
