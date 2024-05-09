import { Ellipsis } from 'lucide-react';
import PropTypes from 'prop-types';
import React from 'react';

export default function Trandding({ data }) {
  return (
    <div className="top-1">
      <div>
        <p className="top-1-1">{data.title}</p>
        <p className="top-1-2 font-bold">{data.topic}</p>
        <p className="top-1-1">{data.postCount} post</p>
      </div>
      <div>
        <Ellipsis size={32} strokeWidth={1.5} />
      </div>
    </div>
  );
}

Trandding.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    topic: PropTypes.string,
    postCount: PropTypes.number,
  }),
};

Trandding.defaultProps = {
  data: {},
};
