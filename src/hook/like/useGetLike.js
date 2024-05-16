import { useQuery } from '@tanstack/react-query';
import getLike from '../../services/like/getLike';

export default function useGetLike({ id }) {
  const { data: getLikeData } = useQuery({
    queryKey: ['like', id],
    queryFn: () => getLike({ id }),
  });

  return { getLikeData };
}
