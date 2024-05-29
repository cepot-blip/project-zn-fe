import { Ellipsis } from 'lucide-react';
import React from 'react';
import StoryPiece from '../../../components/fragment/beranda/StoryPiece';
import UseGetBookmarks from '../../../hook/bookmark/UseGetBookmark';

export default function Bookmark() {
  const { getBookmarkData } = UseGetBookmarks();

  return (
    <div className="h-full w-full">
      <div className="bookmark-header flex justify-between mt-4">
        <div className="bookmark-title">
          <h2 className="text-2xl font-bold">Bookmark</h2>
          <p className="text-gray">@mproyy</p>
        </div>
        <Ellipsis />
      </div>
      {getBookmarkData?.data?.map((item) => (
        <StoryPiece key={item.id} item={item.story} />
      ))}
    </div>
  );
}
