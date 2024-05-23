import { useQuery } from '@tanstack/react-query';
import userService from '../../services/user';

export default function useDetailUser(id) {
  const userId = id;

  const { data: user } = useQuery({
    queryKey: ['userbyId', userId],
    queryFn: () => userService.getDetailUser(userId),
  });

  return { user };
}
