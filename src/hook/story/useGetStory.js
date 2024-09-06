import { useQuery } from '@tanstack/react-query';
import storyService from '../../services/story';

export default function useGetStory() {
  const { data } = useQuery({
    queryKey: ['story'],
    queryFn: () => storyService.getStory(),
  });

  return { data };
}
