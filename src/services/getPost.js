import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

async function getPosts() {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts/1',
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
}

export default function usePosts() {
  const {
    data: posts,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: () => getPosts(),
  });

  return { posts, error, isLoading };
}
