import React from 'react';
import StoryPiece from '../../fragment/beranda/StoryPiece';

import useGetStory from '../../../hook/story/useGetStory';

export default function StoryList() {
  const { data = {} } = useGetStory();

  return (
    <div className="MainContent">
      {data?.query?.map((item) => (
        <StoryPiece key={item.id} item={item} />
      ))}
    </div>
  );
}
