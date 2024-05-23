import { Ellipsis } from 'lucide-react';
import React from 'react';
import StoryPiece from '../../../components/fragment/beranda/StoryPiece';
import useGetStory from '../../../hook/story/useGetStory';

export default function Bookmark() {
  const { data = {} } = useGetStory();

  return (
    <div className="h-full w-full">
      <div className="bookmark-header flex justify-between mt-4">
        <div className="bookmark-title">
          <h2 className="text-2xl font-bold">Bookmark</h2>
          <p className="text-gray">@mproyy</p>
        </div>
        <Ellipsis />
      </div>
      {data?.query?.map((item) => (
        <StoryPiece key={item.id} item={item} />
      ))}
    </div>
  );
}
