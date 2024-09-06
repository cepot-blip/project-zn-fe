import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import likeService from '../../services/like';

export default function useSendLike() {
  const queryClient = useQueryClient();
  const { mutate: createLike, isLoading } = useMutation({
    mutationFn: ({ id, likeId }) =>
      likeService.sendandDeleteLike({ id, likeId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['like'] });
      queryClient.invalidateQueries({ queryKey: ['story'] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { createLike, isLoading };
}
