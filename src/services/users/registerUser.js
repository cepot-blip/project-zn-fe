import axios from 'axios';

export default async function createUser({
  username,
  email,
  password,
  fullName,
}) {
  try {
    const response = await axios.post(
      'http://localhost:9000/api_v1/users/create',
      {
        username,
        email,
        password,
        fullName,
      },
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message);
    }
  }

  return {};
}
