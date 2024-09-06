import { useQuery } from '@tanstack/react-query';
import userService from '../../services/user';

export default function UseDataLogin() {
  const { data: userLogin } = useQuery({
    queryKey: ['userlogin'],
    queryFn: () => userService.userLoginData(),
  });

  return { userLogin };
}
