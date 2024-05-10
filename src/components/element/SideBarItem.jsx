import PropTypes from 'prop-types';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export default function SidebarItem({ icon, text, link }) {
  const location = useLocation();
  const pathname = location.pathname.split('/').filter(Boolean);
  if (!pathname[0]) pathname[0] = '';

  return (
    <NavLink
      to={link}
      className={`flex items-center px-2 h-auto rounded-xl py-2 lg:grid lg:grid-cols-3 ${pathname[pathname.length - 1] === link && 'bg-[#4C93F4]/20'} hover:scale-105 hover:bg-[#4C93F4]/10 active:scale-75 duration-200 transition-all ease-in active:bg-[#4C93F4]/40`}
    >
      {icon}
      <p className="hidden lg:block font-bold text-sm">{text}</p>
    </NavLink>
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
