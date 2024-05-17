import React from 'react';
import ChatListContent from '../../fragment/message/ChatListContent';
import ChatListHeader from '../../fragment/message/ChatListHeader';

export default function ChatList() {
  return (
    <div className="flex px-8 w-full">
      <div className="grid w-full">
        <ChatListHeader />
        <ChatListContent />
      </div>
    </div>
  );
}
