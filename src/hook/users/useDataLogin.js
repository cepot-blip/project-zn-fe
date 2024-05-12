import { useQuery } from '@tanstack/react-query';
import userLoginData from '../../services/users/userLoginData';

export default function useDataLogin() {
  const { data } = useQuery({
    queryKey: ['user'],
    queryFn: () => userLoginData(),
  });

  return { data };
}
