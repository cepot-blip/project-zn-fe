import { Chip, Image } from '@nextui-org/react';
import { Bookmark, Heart, MessageSquareMore } from 'lucide-react';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import UseAddOrRemoveBookmark from '../../../hook/bookmark/addorRemoveBookmark';
import useSendLike from '../../../hook/like/useSendLike';
import UserImg from '../../element/UserImg';

export default function StoryPiece({ item, getBookmarkData, getLikeData }) {
  const [openComment, setOpenComment] = useState(false);
  const { actionBookmark } = UseAddOrRemoveBookmark();
  const { createLike } = useSendLike();

  const bookmarked = getBookmarkData?.data?.some(
    (booked) => booked.story_id === item?.id,
  );

  const isLiked = getLikeData?.query.find((like) => like.story_id === item?.id);

  function handleLike() {
    if (isLiked) {
      createLike({ id: item.id, likeId: isLiked.id });
    } else {
      createLike({ id: item.id });
    }
  }

  function handleBookmark() {
    actionBookmark(item.id);
  }

  return (
    <div className="shadow-md rounded-md mt-8 border px-4 py-4">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-4">
          <NavLink to="#">
            <UserImg src={item?.users?.profilePicture} alt="user" />
          </NavLink>
          <div className="text-sm text-gray-600">
            <p>{item?.users?.fullName}</p>
            <p className="p">{item?.created_at.slice(0, 10)}</p>
          </div>
        </div>
        {item?.category && (
          <Chip variant="flat" color="warning">
            {item?.category?.category_name}
          </Chip>
        )}
      </div>
      <div>
        <div className="mt-4">
          <p>{item.content || 'no content'}</p>
          {item?.image_link && (
            <div className="mt-4 flex overflow-hidden justify-center w-fit shadow-sm border rounded-md">
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
              <li className="flex gap-3 items-center">
                <div className="flex gap-1">
                  <button type="button" onClick={() => handleLike()}>
                    <Heart
                      className="hover:scale-105 active:scale-95"
                      fill={`${isLiked ? '#FF872E' : 'none'}`}
                    />
                  </button>
                  <p className="text-sm">{item.like_count}</p>
                </div>
                <div className="flex gap-1">
                  <button type="button" onClick={() => handleBookmark()}>
                    <Bookmark
                      className="hover:scale-105 active:scale-95"
                      fill={`${bookmarked ? '#FF872E' : 'none'}`}
                    />
                  </button>
                  <p className="text-sm">{item?._count?.bookmark}</p>
                </div>
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
  getBookmarkData: PropTypes.shape({
    status: PropTypes.bool,
    data: PropTypes.arrayOf(PropTypes.object),
    message: PropTypes.string,
  }),
  getLikeData: PropTypes.shape({
    query: PropTypes.array.isRequired,
  }),
};

StoryPiece.defaultProps = {
  getBookmarkData: {},
  getLikeData: {
    query: [],
  },
};
