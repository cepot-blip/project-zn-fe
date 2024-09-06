import { useQuery } from '@tanstack/react-query';
import categoryService from '../../services/category';

export default function GetCategory() {
  const { data: categoryList, ...rest } = useQuery({
    queryKey: ['category'],
    queryFn: () => categoryService.getCategory(),
  });

  return { categoryList, ...rest };
}
