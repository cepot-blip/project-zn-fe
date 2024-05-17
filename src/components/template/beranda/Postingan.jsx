import React, { useState } from 'react';

import { Button, Image, Select, SelectItem } from '@nextui-org/react';
import { toast } from 'react-toastify';
import useCreateStory from '../../../hook/story/useCreateStory';
import { useUserStore } from '../../../store/user/store';
import UserImg from '../../element/UserImg';

const iconPostingan = [
  'Imagesmode.svg',
  'Emotions.svg',
  'Gifbox.svg',
  'Location.svg',
  'Chart.svg ',
];

const categorys = [
  {
    id: 1,
    category_name: 'berita',
    description: 'berita terkini',
  },
  {
    id: 2,
    category_name: 'teknologi',
    description: 'teknologi terkini',
  },
  {
    id: 3,
    category_name: 'olahraga',
    description: 'olahraga terkini',
  },
  {
    id: 4,
    category_name: 'wisata',
    description: 'wisata terkini',
  },
  {
    id: 5,
    category_name: 'lifestyle',
    description: 'lifestyle terkini',
  },
  {
    id: 6,
    category_name: 'hiburan',
    description: 'hiburan terkini',
  },
];

export default function Postingan() {
  const userData = useUserStore((state) => state.userData);
  const [postingan, setPostingan] = useState('');
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const { postStory } = useCreateStory();

  function handlePost() {
    if (!postingan) {
      toast.error('masih kosong itu cuy');
    } else {
      postStory({ title: 'sdfsdf', content: postingan, image_link: '' });
      setPostingan('');
      setImage(null);
    }
  }

  function handleImage(e) {
    if (image) {
      setImage(null);
      setPreview(null);
      return;
    }
    setImage(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className="shadow-md rounded-md border pl-3 p-5">
      <div className="flex gap-4">
        <UserImg src={userData?.profilePicture} alt="profile" />
        <textarea
          type="text"
          value={postingan}
          placeholder="Apa Yang Anda Pikirkan ?!"
          className="h-20 w-[90%] p-2 resize-none"
          onChange={(e) => setPostingan(e.target.value)}
        />
      </div>
      <button
        type="button"
        onClick={(e) => handleImage(e)}
        className="ml-14 w-24"
      >
        <Image src={preview || ''} alt="" />
      </button>
      <div className="mt-2">
        <div className="flex justify-between px-4 items-center w-full">
          <ul className="ml-10 flex gap-4 items-center w-full">
            <li>
              <Select label="category" className="max-w-xs w-32">
                {categorys.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.category_name}
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
