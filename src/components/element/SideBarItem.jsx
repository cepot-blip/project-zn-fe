import { Button } from '@nextui-org/react';
import PropTypes from 'prop-types';
import React from 'react';
import { useLocation } from 'react-router-dom';

export default function SidebarItem({ icon, text, link }) {
  const location = useLocation();
  const pathname = location.pathname.split('/').filter(Boolean);
  if (!pathname[0]) pathname[0] = '';

  return (
    <Button
      size="lg"
      className={`flex lg:grid lg:grid-cols-3 ${pathname[pathname.length - 1] === link && 'bg-[#4C93F4]/20'} `}
      variant="light"
      startContent={icon}
    >
      <h4 className="hidden lg:block font-bold text-sm ">{text}</h4>
    </Button>
  );
}

SidebarItem.propTypes = {
  icon: PropTypes.node,
  text: PropTypes.node,
  link: PropTypes.string,
};

SidebarItem.defaultProps = {
  icon: '',
  text: '',
  link: '',
};
