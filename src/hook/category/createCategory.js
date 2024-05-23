import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import categoryService from '../../services/category';

export default function useCreateCategory() {
  const { mutate: createCategory, ...rest } = useMutation({
    mutationKey: ['createCategory'],
    mutationFn: ({ category_name, description }) =>
      categoryService.createCategory({ category_name, description }),
    onSuccess: () => {
      toast.success('Category Created');
    },
    onError: (err) => {
      throw new Error(err.message);
    },
  });

  return { createCategory, ...rest };
}
