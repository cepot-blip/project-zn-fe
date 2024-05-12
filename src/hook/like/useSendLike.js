import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import sendandDeleteLike from '../../services/like/sendLike';

export default function useSendLike() {
  const queryClient = useQueryClient();
  const { mutate: createLike, isLoading } = useMutation({
    mutationFn: ({ id, likeId }) => sendandDeleteLike({ id, likeId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['like'] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { createLike, isLoading };
}
