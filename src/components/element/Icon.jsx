import {
  BarChart2,
  Bookmark,
  Heart,
  MessageSquareMore,
  Share2,
} from 'lucide-react';
import React from 'react';

const Icons = [
  {
    id: 1,
    icon: (
      <MessageSquareMore
        size={22}
        className="text-[#FF872E]"
        strokeWidth={1.5}
      />
    ),
  },
  {
    id: 2,
    icon: <Heart size={22} className="text-[#FF872E]" strokeWidth={1.5} />,
  },
  {
    id: 3,
    icon: <Share2 size={22} className="text-[#FF872E]" strokeWidth={1.5} />,
  },
  {
    id: 4,
    icon: <Bookmark size={22} className="text-[#FF872E]" strokeWidth={1.5} />,
  },
  {
    id: 5,
    icon: <BarChart2 size={22} className="text-[#FF872E]" strokeWidth={1.5} />,
  },
];

export default Icons;
