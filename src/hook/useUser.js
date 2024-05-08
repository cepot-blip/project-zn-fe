import { useQuery } from '@tanstack/react-query';
import { getUser } from '../services/AuthUser';

export default function useUser() {
  const { data } = useQuery({
    queryKey: ['user'],
    queryFn: () => getUser(),
  });

  return { data };
}
