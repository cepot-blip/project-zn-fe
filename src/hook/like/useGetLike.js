import { useQuery } from '@tanstack/react-query';
import likeService from '../../services/like';

export default function useGetLike({ id }) {
  const { data: getLikeData } = useQuery({
    queryKey: ['like', id],
    queryFn: () => likeService.getLike({ id }),
  });

  return { getLikeData };
}
