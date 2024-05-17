import React from 'react';
import ChatList from '../../components/template/message/ChatList';
import ChatUser from '../../components/template/message/ChatUser';

export default function Message() {
  return (
    <div className="flex justify-between absolute ">
      <div className="w-full mt-4 shadow-md">
        <ChatList />
      </div>
      <div className="w-full mt-4  shadow-md">
        <ChatUser />
      </div>
    </div>
  );
}
