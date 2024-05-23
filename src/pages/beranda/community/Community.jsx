import { MoveLeft } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import StoryPiece from '../../../components/fragment/beranda/StoryPiece';
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
  const { data = {} } = useGetStory();
  return (
    <div className="w-full h-full">
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
        <div className="w-full px-4 flex gap-1 mt-4">
          {CommunityLink.map((item) => (
            <NavLink
              className="font-bold text-center block w-24 py-2 border-b border-b-primary"
              key={item.label}
              to={`${item.link}`}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="comm-post">
        {data?.query?.map((item) => (
          <StoryPiece key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
