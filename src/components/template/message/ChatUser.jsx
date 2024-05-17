import React from 'react';
import ChatUserAction from '../../fragment/message/ChatUserAction';
import ChatUserHeader from '../../fragment/message/ChatUserHeader';
import ChatUserMain from '../../fragment/message/ChatUserMain';

export default function ChatUser() {
  return (
    <div className="flex px-8  border-xl relative w-full ">
      <div className="block w-full">
        <ChatUserHeader />
        <ChatUserMain />
        <ChatUserAction />
      </div>
    </div>
  );
}
