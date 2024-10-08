/* eslint-disable camelcase */
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import userService from '../../services/user';

export default function useUpdateUser() {
  const {
    mutate: editUser,
    isLoading,
    isSuccess,
  } = useMutation({
    mutationFn: ({
      id,
      username,
      email,
      phone_number,
      fullName,
      profilePicture,
    }) =>
      userService.updateUser({
        id,
        username,
        email,
        phone_number,
        fullName,
        profilePicture,
      }),
    onSuccess: () => {
      toast.success('update Success');
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { editUser, isLoading, isSuccess };
}
