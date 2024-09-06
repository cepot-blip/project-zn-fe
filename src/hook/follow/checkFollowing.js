import { useQuery } from '@tanstack/react-query';
import followService from '../../services/follow';

export default function UseCheckFollowing(id) {
  const { data: checkFollow, ...rest } = useQuery({
    queryKey: ['follow', id],
    queryFn: () => followService.checkFollow(id),
    enabled: !!id,
    retry: false,
  });

  return { checkFollow, ...rest };
}
