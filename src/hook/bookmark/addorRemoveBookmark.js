import { useMutation, useQueryClient } from '@tanstack/react-query';
import bookmarkService from '../../services/bookmark';

export default function UseAddOrRemoveBookmark() {
  const queryClient = useQueryClient();
  const { mutate: actionBookmark } = useMutation({
    mutationKey: ['bookmark'],
    mutationFn: (id) => bookmarkService.addorRemoveBookmark(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookmark'] });
      queryClient.invalidateQueries({ queryKey: ['story'] });
    },
  });

  return { actionBookmark };
}
