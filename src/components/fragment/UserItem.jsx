import React from 'react';
import UserImg from '../element/UserImg';

const UserItem = ({ user }) => {
  return (
    <div className="follow-1">
      <div className="follow-1-1">
        <UserImg />
      </div>
      <div className="follow-1-2">
        <div className="follow-1-2-1">
          <h1>{user.name}</h1>
          <p>{user.username}</p>
        </div>
        <div className="follow-1-2-2">
          <img src="check.png" alt="" className="img" />
        </div>
      </div>
      <div className="follow-1-3">
        <button>Follow</button>
      </div>
    </div>
  );
};

export default UserItem;
