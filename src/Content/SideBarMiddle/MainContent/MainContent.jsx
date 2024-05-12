import React from 'react';
import ContentBlock from '../../../components/template/ContentBlock/ContentBlock';
import useGetStory from '../../../hook/story/useGetStory';

export default function MainContent() {
  const { data = {} } = useGetStory();

  return (
    <div className="MainContent">
      {data?.query?.map((item) => (
        <ContentBlock key={item.id} item={item} />
      ))}
    </div>
  );
}
