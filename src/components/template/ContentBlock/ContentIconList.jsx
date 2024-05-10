import { Button } from '@nextui-org/react';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CustomIcon from '../../element/CustomIcon';

export default function ContentIconList({ item }) {
  const [active, isActive] = useState(false);
  return (
    <li className="flex items-center gap-1" key={item.id}>
      <Button
        onClick={() => isActive(!active)}
        variant="ghost"
        className="border-none"
        isIconOnly
      >
        <CustomIcon
          Name={item.icon}
          fill={`${active ? '#FF872E' : 'none'}`}
          className="text-[#FF872E]"
        />
      </Button>
      <p className="text-xs -ml-1 text-gray-400">3300</p>
    </li>
  );
}

ContentIconList.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
};
