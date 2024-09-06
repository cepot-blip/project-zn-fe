import { useQuery } from '@tanstack/react-query';
import likeService from '../../services/like';

export default function useGetLike() {
  const { data: getLikeData } = useQuery({
    queryKey: ['like'],
    queryFn: () => likeService.getLike(),
  });

  return { getLikeData };
}
