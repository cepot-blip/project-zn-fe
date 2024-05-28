import { useQuery } from '@tanstack/react-query';
import userService from '../../services/user';

export default function UseGetUser() {
  const { data } = useQuery({
    queryKey: ['user'],
    queryFn: () => userService.listUser(),
  });

  return { data };
}
