import axios from 'axios';
import Cookies from 'js-cookie';

export async function createUser({ username, email, password }) {
  try {
    const response = await axios.post(
      'http://localhost:9000/api/users/create',
      {
        username,
        email,
        password,
      },
    );

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

export async function loginUser({ email, password }) {
  try {
    const response = await axios.post('http://localhost:9000/api/users/login', {
      email,
      password,
    });
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

// export function useRegister() {
//   const {
//     mutate: register,
//     isLoading,
//     isSuccess,
//   } = useMutation({
//     mutationFn: ({ username, email, password }) =>
//       createUser({ username, email, password }),
//     onSuccess: () => {
//       // window.open('/login', '_self');
//     },
//     onError: (err) => {
//       console.log('ERROR', err.message);
//     },
//   });

//   return { register, isLoading, isSuccess };
// }
