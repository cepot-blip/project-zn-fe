import { Gift, Image, Send, Smile } from 'lucide-react';
import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Input from '../../element/Input';

export default function ChatUserAction() {
  return (
    <div className="bg-[#3769A5]/30 p-2 w-full rounded-xl flex justify-between">
      <div className="flex mt-3 mx-4">
        <IconLink to="#" icon={<Image width={25} height={25} />} />
        <IconLink to="#" icon={<Gift width={25} height={25} />} />
        <IconLink to="#" icon={<Smile width={25} height={25} />} />
      </div>
      <div className="w-full">
        <Input className="w-full" size="sm" type="text" label="Message" />
      </div>
      <div className="mt-3 mx-4">
        <IconLink to="#" icon={<Send width={25} height={25} />} />
      </div>
    </div>
  );
}

function IconLink({ to, icon }) {
  return (
    <NavLink
      to={to}
      className="text-blue-400 hover:text-gray-700 transition duration-400"
    >
      {icon}
    </NavLink>
  );
}

IconLink.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};
