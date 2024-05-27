import { useMutation } from '@tanstack/react-query';
import imageService from '../../services/image';

export default function UploadImage() {
  const { mutate: uploadImage, ...rest } = useMutation({
    mutationFn: (image) => imageService.uploadImage(image),
  });
  return { uploadImage, ...rest };
}
