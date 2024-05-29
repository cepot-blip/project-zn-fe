import { useMutation, useQueryClient } from '@tanstack/react-query';
import followService from '../../services/follow';

export default function UseSendFollow() {
  const queryClient = useQueryClient();
  const { mutate: sendFollow, ...rest } = useMutation({
    mutationKey: ['follow'],
    mutationFn: ({ id, followId }) =>
      followService.FollowOrUnfollow({ id, followId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['follow'] });
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });

  return { sendFollow, ...rest };
}
