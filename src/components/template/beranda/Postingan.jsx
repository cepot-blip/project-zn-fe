import React, { useRef, useState } from 'react';

import { Button, Image, Select, SelectItem } from '@nextui-org/react';
import { X } from 'lucide-react';
import { toast } from 'react-toastify';
import GetCategory from '../../../hook/category/getCategory';
import UploadImage from '../../../hook/image/uploadImage';
import useCreateStory from '../../../hook/story/useCreateStory';
import usePostinganStore from '../../../store/postingan/postinganStore';
import { useUserStore } from '../../../store/user/store';
import UserImg from '../../element/UserImg';

const iconPostingan = [
  'Imagesmode.svg',
  'Emotions.svg',
  'Gifbox.svg',
  'Location.svg',
  'Chart.svg ',
];

export default function Postingan() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);

  const userData = useUserStore((state) => state.userData);
  const postingan = usePostinganStore((state) => state.postingan);
  const setPost = usePostinganStore((state) => state.setPost);
  const category_id = usePostinganStore((state) => state.category_id);
  const setCategoryId = usePostinganStore((state) => state.setCategoryId);

  const { postStory } = useCreateStory();
  const { uploadImage } = UploadImage();
  const { categoryList } = GetCategory();

  function handlePost() {
    if (!postingan || !category_id) {
      toast.error('check lagi ada yang belum di isi tuh');
      throw new Error('masih kosong itu cuy');
    }

    if (!image) {
      postStory({
        content: postingan,
        image_link: '',
        category_id: Number(category_id),
      });
      setPost('');
      setImage(null);
      return null;
    }

    uploadImage(image, {
      onSuccess: (data) => {
        postStory({
          content: postingan,
          image_link: `http://localhost:9000/${data.image_link}`,
          category_id: Number(category_id),
        });
      },
    });

    setPost('');
    setImage(null);
    setPreview(null);

    return null;
  }

  function handleImage(e) {
    setImage(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
  }

  function imageClose() {
    setImage(null);
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  }

  return (
    <div className="shadow-md rounded-md border pl-3 p-5">
      <div className="flex gap-4">
        <UserImg src={userData?.profilePicture} alt="profile" />
        <div className="flex w-full flex-col gap-2">
          <textarea
            type="text"
            value={postingan}
            placeholder="Apa Yang Anda Pikirkan ?!"
            className="h-20 border w-[90%] p-2 resize-none"
            onChange={(e) => setPost(e.target.value)}
          />
        </div>
      </div>
      {preview && (
        <div className="ml-14 relative w-24 mt-4">
          <button
            type="button"
            className="absolute top-1 right-1 z-30"
            onClick={() => imageClose()}
          >
            <X size={20} className="text-gray-600" />
          </button>
          <Image src={preview || ''} alt="" />
        </div>
      )}
      <div className="mt-2">
        <div className="flex justify-between px-4 items-center w-full">
          <ul className="ml-10 flex gap-4 items-center w-full">
            <li>
              <Select
                onChange={(e) => setCategoryId(e.target.value)}
                label="category"
                className="max-w-xs w-32"
              >
                {categoryList?.query?.map((item) => (
                  <SelectItem key={item.id} value={item.id}>
                    {item.category_name}
                  </SelectItem>
                ))}
              </Select>
            </li>
            <li>
              <label htmlFor="imageInput">
                <img
                  className="hover:cursor-pointer"
                  src={iconPostingan[0]}
                  alt="uploadImagePost"
                />
              </label>
              <input
                type="file"
                name="imageInput"
                id="imageInput"
                className="hidden"
                ref={fileInputRef}
                onChange={(e) => handleImage(e)}
              />
            </li>
          </ul>
          <Button
            onClick={() => handlePost()}
            variant="solid"
            className="bg-[#3769A5] text-white rounded-full "
          >
            Post
          </Button>
        </div>
      </div>
    </div>
  );
}
