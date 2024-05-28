import { CircleCheck } from 'lucide-react';
import PropTypes from 'prop-types';
import React from 'react';
import UseGetFollowing from '../../../hook/follow/getFollowing';
import UseSendFollow from '../../../hook/follow/sendFollowing';
import Button from '../../element/Button';
import UserImg from '../../element/UserImg';

export default function UserItem({ user, currentUser }) {
  const { sendFollow } = UseSendFollow();
  const { data = {} } = UseGetFollowing(currentUser?.id);

  const isFollowed = data?.query?.find(
    (item) => item.following_user_id === user.id,
  );

  function handleFollow() {
    sendFollow(Number(user.id));
  }

  return (
    <div className="flex items-center justify-between px-1">
      <div className="flex items-center gap-1">
        <UserImg alt="profile" />
        <div className="flex items-center">
          <div>
            <h1 className="font-semibold md:text-sm">{user.username}</h1>
            <p className="text-gray-500 font-bold text-[11px]">
              @{user.username}
            </p>
          </div>
          <CircleCheck size={16} strokeWidth={3} className="text-[#3769A5]" />
        </div>
      </div>
      <div>
        <Button
          fullrounded
          disabled={isFollowed}
          onClick={() => handleFollow()}
          className={`${isFollowed ? 'border border-[#3769A5] text-blue-500' : 'bg-[#3769A5]'} cursor-pointer text-xs px-1 h-6 flex items-center justify-center`}
        >
          {isFollowed ? 'following' : 'follow'}
        </Button>
      </div>
    </div>
  );
}

UserItem.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    username: PropTypes.string,
  }),
  currentUser: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};

UserItem.defaultProps = {
  user: {
    name: 'Mpoory',
    username: '@Mpoory',
  },
};
