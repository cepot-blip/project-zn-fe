import { Ellipsis, MoveLeft } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import StoryPiece from '../../../components/fragment/beranda/StoryPiece';
import UseGetBookmarks from '../../../hook/bookmark/UseGetBookmark';
import useGetStory from '../../../hook/story/useGetStory';

const CommunityLink = [
  {
    label: 'all',
    link: '',
  },
  {
    label: 'wibu',
    link: 'wibu',
  },
  {
    label: 'ReactJS',
    link: 'reactjs',
  },
  {
    label: 'zn project',
    link: 'znproject',
  },
  {
    label: 'mabar',
    link: 'mabar',
  },
  {
    label: 'hore-hore',
    link: 'horehore',
  },
];

export default function Community() {
  const { getBookmarkData } = UseGetBookmarks();
  const { data = {} } = useGetStory();
  return (
    <div className="h-full">
      <div className="comm-header flex gap-4 items-center">
        <button
          type="button"
          onClick={() => toast.info('tombol kembali mungkin?')}
        >
          <MoveLeft className="text-blue-400" size={36} />
        </button>
        <h2 className="text-2xl font-bold border-b pb-1">Your Community</h2>
      </div>
      <div className="comm-action flex justify-center mt-4">
        <ul className="w-full items-center justify-around  flex mt-4">
          {CommunityLink.map((item, index) => (
            <li className="" key={item.label}>
              <NavLink
                className={`font-bold text-center block  py-2 ${index === 0 ? 'border-b-4 border-b-primary' : ''}`}
                to={`${item.link}`}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <Ellipsis size={32} strokeWidth={1.5} />
        </ul>
      </div>
      <div className="comm-post">
        {data?.query?.map((item) => (
          <StoryPiece
            getBookmarkData={getBookmarkData}
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}
