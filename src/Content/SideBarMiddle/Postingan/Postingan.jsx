import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { Button } from '@nextui-org/react';
import UserImg from '../../../components/element/UserImg';
import useCreateStory from '../../../hook/story/useCreateStory';

const iconPostingan = [
  'Imagesmode.svg',
  'Emotions.svg',
  'Gifbox.svg',
  'Location.svg',
  'Chart.svg ',
];

export default function Postingan() {
  const [postingan, setPostingan] = useState('');
  const [image, setImage] = useState(null);
  const { postStory } = useCreateStory();
  function handlePost() {
    if (!postingan) {
      if (image) toast.warning('Postingan Tidak Boleh Kosong');
    } else {
      postStory({ title: 'sdfsdf', content: postingan, image_link: '' });
      setPostingan('');
      setImage(null);
    }
  }

  return (
    <div className="shadow-md rounded-md border pl-3 p-5">
      <div className="flex gap-4">
        <UserImg alt="profile" />
        <textarea
          type="text"
          value={postingan}
          placeholder="Apa Yang Anda Pikirkan ?!"
          className="h-20 w-[90%] p-2 resize-none"
          onChange={(e) => setPostingan(e.target.value)}
        />
      </div>
      <div className="mt-2">
        <div className="flex justify-between px-4 items-center">
          <ul className="ml-10 flex gap-4 items-center">
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
