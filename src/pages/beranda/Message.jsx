import React from 'react';
import ChatList from '../../components/template/message/ChatList';
import ChatUser from '../../components/template/message/ChatUser';

export default function Message() {
  return (
    <div className="flex h-full justify-between gap-4">
      <div className="flex-1 mt-4">
        <ChatList />
      </div>
      <div className="flex-1 mt-4 ">
        <ChatUser />
      </div>
    </div>
  );
}
