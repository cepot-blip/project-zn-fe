import React from 'react';
import ChatUserAction from '../../fragment/message/ChatUserAction';
import ChatUserHeader from '../../fragment/message/ChatUserHeader';
import ChatUserMain from '../../fragment/message/ChatUserMain';

export default function ChatUser() {
  return (
    <div className="flex px-8 h-full shadow-md w-full py-2 ">
      <div className="flex justify-between flex-col w-full">
        <ChatUserHeader />
        <ChatUserMain />
        <ChatUserAction />
      </div>
    </div>
  );
}
