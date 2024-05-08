import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { createUser } from '../services/AuthUser';

export default function useRegister() {
  const {
    mutate: register,
    isLoading,
    isSuccess,
  } = useMutation({
    mutationFn: ({ username, email, password }) =>
      createUser({ username, email, password }),
    onSuccess: () => {
      toast.success('Register Success');
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { register, isLoading, isSuccess };
}
