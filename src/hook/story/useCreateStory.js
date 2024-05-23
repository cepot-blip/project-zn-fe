/* eslint-disable camelcase */

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import storyService from '../../services/story';

export default function useCreateStory() {
  const queryClient = useQueryClient();
  const { mutate: postStory, isLoading } = useMutation({
    // eslint-disable-next-line camelcase
    mutationFn: ({ title, content, image_link }) =>
      storyService.createStory({ title, content, image_link }),
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
