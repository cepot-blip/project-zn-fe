import React from 'react';

const Trandding = ({ data }) => {
  return (
    <div className="top-1">
      <div>
        <p className="top-1-1">{data.title}</p>
        <p className="top-1-2">{data.topic}</p>
        <p className="top-1-1">{data.postCount} post</p>
      </div>
      <div>
        <img src="ellipsis.png" alt="" className="top-1-3" />
      </div>
    </div>
  );
};

export default Trandding;
