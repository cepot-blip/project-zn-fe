/* eslint-disable camelcase */
import axios from 'axios';
import Cookie from 'js-cookie';

export default async function createUser({
  username,
  email,
  password,
  fullName,
  phone_number,
}) {
  try {
    const response = await axios.post(
      'http://localhost:9000/api_v1/users/create',
      {
        username,
        email,
        password,
        fullName,
        phone_number,
      },
    );

    Cookie.set('token', response.data.token);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message);
    }
  }

  return {};
}
