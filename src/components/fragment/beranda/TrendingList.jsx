import { Ellipsis } from 'lucide-react';
import PropTypes from 'prop-types';
import React from 'react';
import { useLocation } from 'react-router-dom';

export default function TrendingList({ data }) {
  const location = useLocation();
  const pathname = location.pathname.split('/').filter(Boolean);
  if (!pathname[0]) pathname[0] = '';
  const explore = ['explore'];
  return (
    <div
      className={`${explore.includes(pathname[pathname.length - 1]) && 'mt-4'} flex w-full items-center gap-2 justify-between px-1`}
    >
      <div>
        <p className="text-gray-400 font-medium text-sm">{data.title}</p>
        <p className="font-bold">{data.topic}</p>
        <p className="text-gray-400 font-medium text-sm">
          {data.postCount} post
        </p>
      </div>
      <div>
        <Ellipsis size={32} strokeWidth={1.5} />
      </div>
    </div>
  );
}

TrendingList.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    topic: PropTypes.string,
    postCount: PropTypes.number,
  }),
};

TrendingList.defaultProps = {
  data: {},
};
