/* eslint-disable camelcase */

import axiosInstance from '../AxiosInstance';

export default async function createStory({ title, content, image_link }) {
  try {
    const res = await axiosInstance.post(
      'http://localhost:9000/api_v1/stories',
      {
        title,
        content,
        image_link,
        category_id: 1,
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
