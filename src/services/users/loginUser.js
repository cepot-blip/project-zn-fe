import axios from 'axios';
import Cookies from 'js-cookie';

export default async function loginUser({ loginInput, password }) {
  let email;
  let phone_number;
  if (/^\d+$/.test(loginInput)) {
    phone_number = loginInput;
  } else {
    email = loginInput;
  }
  try {
    const response = await axios.post(
      'http://localhost:9000/api_v1/users/login',
      {
        email,
        password,
        phone_number,
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
