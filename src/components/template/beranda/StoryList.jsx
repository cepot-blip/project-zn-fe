import React from 'react';
import StoryPiece from '../../fragment/beranda/StoryPiece';

import UseGetBookmarks from '../../../hook/bookmark/UseGetBookmark';
import useGetStory from '../../../hook/story/useGetStory';

export default function StoryList() {
  const { data = {} } = useGetStory();
  const { getBookmarkData } = UseGetBookmarks();

  return (
    <div className="MainContent">
      {data?.query?.map((item) => (
        <StoryPiece
          key={item.id}
          item={item}
          getBookmarkData={getBookmarkData}
        />
      ))}
    </div>
  );
}
