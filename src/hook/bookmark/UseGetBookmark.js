import { useQuery } from '@tanstack/react-query';
import bookmarkService from '../../services/bookmark';

export default function UseGetBookmarks() {
  const { data: getBookmarkData } = useQuery({
    queryKey: ['bookmark'],
    queryFn: () => bookmarkService.getBookmarks(),
  });
  return { getBookmarkData };
}
