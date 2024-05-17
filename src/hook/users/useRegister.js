/* eslint-disable camelcase */
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import createUser from '../../services/users/registerUser';

export default function useRegister() {
  const navigate = useNavigate();
  const {
    mutate: register,
    isLoading,
    isSuccess,
  } = useMutation({
    mutationFn: ({ username, email, password, fullName, phone_number }) =>
      createUser({ username, email, password, fullName, phone_number }),
    onSuccess: () => {
      toast.success('Register Success');
      navigate('/register/set-profile');
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { register, isLoading, isSuccess };
}