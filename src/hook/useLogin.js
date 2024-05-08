import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { loginUser } from '../services/AuthUser';

export default function useLogin() {
  const {
    mutate: login,
    isLoading,
    isSuccess,
  } = useMutation({
    mutationFn: ({ email, password }) => loginUser({ email, password }),
    onSuccess: () => {
      toast.success('Login Success');
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { login, isLoading, isSuccess };
}
