import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import createUser from '../../services/users/registerUser';

export default function useRegister() {
  const {
    mutate: register,
    isLoading,
    isSuccess,
  } = useMutation({
    mutationFn: ({ username, email, password, fullName }) =>
      createUser({ username, email, password, fullName }),
    onSuccess: () => {
      toast.success('Register Success');
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { register, isLoading, isSuccess };
}
