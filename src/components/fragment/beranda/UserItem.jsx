import { CircleCheck } from 'lucide-react';
import PropTypes from 'prop-types';
import React from 'react';
import Button from '../../element/Button';
import UserImg from '../../element/UserImg';

export default function UserItem({ user }) {
  return (
    <div className="flex items-center gap-2 justify-between px-1">
      <div className="flex items-center gap-1">
        <UserImg alt="profile" />
        <div className="flex items-center">
          <div>
            <h1 className="font-bold text-base md:text-sm">{user.name}</h1>
            <p className="text-gray-500 font-bold text-[11px]">
              {user.username}
            </p>
          </div>
          <CircleCheck size={16} strokeWidth={3} className="text-[#3769A5]" />
        </div>
      </div>
      <div>
        <Button
          fullrounded
          className="text-xs px-1 h-6 bg-[#3769A5] flex items-center justify-center"
        >
          Follow
        </Button>
      </div>
    </div>
  );
}

UserItem.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    username: PropTypes.string,
  }),
};

UserItem.defaultProps = {
  user: {
    name: 'Mpoory',
    username: '@Mpoory',
  },
};
