import { useMutation, useQueryClient } from '@tanstack/react-query';
import followService from '../../services/follow';

export default function UseSendFollow() {
  const queryClient = useQueryClient();
  const { mutate: sendFollow, ...rest } = useMutation({
    mutationKey: ['follow'],
    mutationFn: (id) => followService.sendFollow(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['followed'] });
    },
  });

  return { sendFollow, ...rest };
}
