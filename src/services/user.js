import axios from 'axios';
import Cookies from 'js-cookie';
import axiosInstance from './AxiosInstance';

export default class userService {
  static async getDetailUser(id) {
    try {
      const res = await axiosInstance.get(`/users/get-byid/${id}`);
      return res.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async listUser() {
    try {
      const res = await axiosInstance.post('/users/get');
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

  static async loginUser({ loginInput, password }) {
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

  static async createUser({
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

      Cookies.set('token', response.data.token);
      return response.data;
    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.message);
      }
    }

    return {};
  }

  static async updateUser({
    id,
    username,
    email,
    phone_number,
    fullName,
    profilePicture,
  }) {
    try {
      const res = await axiosInstance.put(
        'http://localhost:9000/api_v1/users/update',
        {
          id,
          username,
          email,
          phone_number,
          fullName,
          profilePicture,
        },
      );
      return res.data;
    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.message);
      }
      throw new Error(error);
    }
  }

  static async userLoginData() {
    try {
      const res = await axiosInstance.get('/users/auth');
      return res.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
