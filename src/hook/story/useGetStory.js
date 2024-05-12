import { useQuery } from '@tanstack/react-query';
import getStory from '../../services/story/getStory';

export default function useGetStory() {
  const { data } = useQuery({
    queryKey: ['story'],
    queryFn: () => getStory(),
  });

  return { data };
}
