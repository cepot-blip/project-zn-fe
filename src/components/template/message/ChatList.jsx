import React from 'react';
import ChatListContent from '../../fragment/message/ChatListContent';
import ChatListHeader from '../../fragment/message/ChatListHeader';

export default function ChatList() {
  return (
    <div className="flex px-8 w-full h-full shadow-md">
      <div className="flex flex-col gap-2 w-full">
        <ChatListHeader />
        <ChatListContent />
      </div>
    </div>
  );
}
