import { useQuery } from '@tanstack/react-query';
import getDetailUser from '../../services/users/getDetailUser';

export default function useDetailUser(id) {
  const userId = id;

  const { data: user } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => getDetailUser(userId),
  });

  return { user };
}
