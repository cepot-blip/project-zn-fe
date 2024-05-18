import { Image } from '@nextui-org/react';
import { Heart, MessageSquareMore } from 'lucide-react';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useGetLike from '../../../hook/like/useGetLike';
import useSendLike from '../../../hook/like/useSendLike';
import { useUserStore } from '../../../store/user/store';
import UserImg from '../../element/UserImg';

export default function StoryPiece({ item }) {
  const [openComment, setOpenComment] = useState(false);
  const userData = useUserStore((state) => state.userData);
  const { createLike } = useSendLike();
  const { getLikeData = { query: [] } } = useGetLike({ id: item.id });

  //  prettier-ignore
  const userLiked = getLikeData?.query?.filter((like) => like.user_id === userData?.id).length > 0;
  const isLiked = getLikeData?.query[0]?.story_id === item.id && userLiked;
  const likeId = getLikeData?.query[0]?.id;

  function handleLike() {
    if (isLiked) {
      createLike({ id: item.id, likeId });
    } else {
      createLike({ id: item.id });
    }
  }

  return (
    <div className="shadow-md rounded-md mt-8 border px-4 py-4">
      <div className="flex items-center gap-4">
        <NavLink to="#">
          <UserImg src={item?.users?.profilePicture} alt="user" />
        </NavLink>
        <div className="text-sm text-gray-600">
          <p>{item?.users?.fullName}</p>
          <p className="p">story id {item.id}</p>
        </div>
      </div>
      <div>
        <div className="mt-4">
          <p>{item.content || 'no content'}</p>
          {item?.image_link && (
            <div className="mt-4 flex overflow-hidden justify-center w-full md:max-w-52  lg:max-w-[440px] bg-red-900 lg:h-64 md:h-48 h-32 rounded-md">
              <Image
                alt="NextUI hero Image"
                src={item.image_link}
                width={458}
                className="object-cover md:max-w-52  lg:max-w-[440px] max-h-full  rounded-md"
              />
            </div>
          )}
          <div className="">
            <ul className="flex mt-4 gap-4 text-[#ff872e]">
              <li>
                <label htmlFor="commentpost">
                  <MessageSquareMore />
                </label>
                <input
                  id="commentpost"
                  name="commentpost"
                  type="checkbox"
                  className="hidden"
                  onChange={() => setOpenComment(!openComment)}
                />
              </li>
              <li className="flex gap-1">
                <button type="button" onClick={() => handleLike()}>
                  <Heart
                    className="hover:scale-105 active:scale-95"
                    fill={`${isLiked ? '#FF872E' : 'none'}`}
                  />
                </button>
                <p className="text-sm">{item.like_count}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

StoryPiece.propTypes = {
  item: PropTypes.object.isRequired,
};
