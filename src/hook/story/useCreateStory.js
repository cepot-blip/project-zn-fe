/* eslint-disable camelcase */

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import createStory from '../../services/story/createStory';

export default function useCreateStory() {
  const queryClient = useQueryClient();
  const { mutate: postStory, isLoading } = useMutation({
    // eslint-disable-next-line camelcase
    mutationFn: ({ title, content, image_link }) =>
      createStory({ title, content, image_link }),
    onSuccess: () => {
      toast.success('Post Created');
      queryClient.invalidateQueries({ queryKey: ['story'] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { postStory, isLoading };
}
