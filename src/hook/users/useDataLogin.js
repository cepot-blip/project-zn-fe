import { useQuery } from '@tanstack/react-query';
import userLoginData from '../../services/users/userLoginData';

export default function useDataLogin() {
  const { data: userLogin } = useQuery({
    queryKey: ['userlogin'],
    queryFn: () => userLoginData(),
  });

  return { userLogin };
}
