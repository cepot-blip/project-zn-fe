import { useQuery } from '@tanstack/react-query';
import followService from '../../services/follow';

export default function UseGetFollowing(id) {
  const { data, ...rest } = useQuery({
    queryKey: ['follow'],
    queryFn: () => followService.getFollow(id),
    enabled: !!id,
  });

  return { data, ...rest };
}
