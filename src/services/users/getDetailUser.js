//

import axios from 'axios';
import Cookies from 'js-cookie';

export default async function getDetailUser(id) {
  const token = Cookies.get('token');
  try {
    const res = await axios.get(
      `http://localhost:9000/api_v1/users/get-byid/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
