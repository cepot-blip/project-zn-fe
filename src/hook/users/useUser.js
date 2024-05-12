import { useQuery } from '@tanstack/react-query';
import listUser from '../../services/users/listUser';

export default function useUser() {
  const { data } = useQuery({
    queryKey: ['user'],
    queryFn: () => listUser(),
  });

  return { data };
}
