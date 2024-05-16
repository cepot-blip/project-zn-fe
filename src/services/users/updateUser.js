/* eslint-disable camelcase */
import axiosInstance from '../AxiosInstance';

export default async function updateUser({
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
