/* eslint-disable camelcase */

import axios from 'axios';
import Cookies from 'js-cookie';

export default async function createStory({ title, content, image_link }) {
  try {
    const res = await axios.post(
      'http://localhost:9000/api_v1/stories',
      {
        title,
        content,
        image_link,
        category_id: 1,
      },
      {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`,
          'Content-Type': 'application/json',
        },
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
