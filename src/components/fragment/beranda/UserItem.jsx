import { CircleCheck } from 'lucide-react';
import PropTypes from 'prop-types';
import React from 'react';
import UseCheckFollowing from '../../../hook/follow/checkFollowing';
import UseSendFollow from '../../../hook/follow/useSendFollowing';
import Button from '../../element/Button';
import UserImg from '../../element/UserImg';

export default function UserItem({ user }) {
  const { sendFollow } = UseSendFollow();
  const { checkFollow = {} } = UseCheckFollowing(user?.id);
  const isFollowed = checkFollow?.following_user_id === user?.id;

  function handleFollow() {
    if (isFollowed) {
      sendFollow({ id: Number(user.id), followId: checkFollow.id });
      return null;
    }
    sendFollow({ id: Number(user?.id) });
    return null;
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
          onClick={() => handleFollow()}
          className={`${isFollowed ? 'border border-[#3769A5] text-blue-500' : 'bg-[#3769A5] text-white'} cursor-pointer text-xs px-1 h-6 flex items-center  justify-center`}
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
