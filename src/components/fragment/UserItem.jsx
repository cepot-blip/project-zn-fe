import PropTypes from 'prop-types';
import React from 'react';
import Button from '../element/Button';
import UserImg from '../element/UserImg';

export default function UserItem({ user }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-1">
        <UserImg src="/profile.png" alt="" />
        <div className="follow-1-2">
          <div className="follow-1-2-1">
            <h1 className="font-bold text-[16px]">{user.name}</h1>
            <p className="text-gray-500 font-bold text-[11px]">
              {user.username}
            </p>
          </div>
          <img src="/check.png" alt="" className="w-4 h-4" />
        </div>
      </div>
      <div>
        <Button
          fullrounded
          className="px-8 text-xs h-6 bg-[#3769A5] flex items-center justify-center"
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
