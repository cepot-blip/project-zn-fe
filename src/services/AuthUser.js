import axios from 'axios';
import Cookies from 'js-cookie';

export async function createUser({ username, email, password }) {
  try {
    const response = await axios.post(
      'http://localhost:9000/api_v1/users/create',
      {
        username,
        email,
        password,
      },
    );

    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error('user already exists');
    }

    if (error.request) {
      throw new Error('mngik');
    }
    throw new Error('Something went wrong');
  }
}

export async function getUser() {
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

export async function loginUser({ email, password }) {
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
      return { error: error.response.data };
    }
    if (error.request) {
      return { error: 'No response from server' };
    }
    return { error: error.message };
  }
}
