import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import loginUser from '../../services/users/loginUser';

export default function useLogin() {
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ loginInput, password }) =>
      loginUser({ loginInput, password }),
    onSuccess: () => {
      toast.success('Login Success');
      navigate('/');
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { login, isLoading };
}
