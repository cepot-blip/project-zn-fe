import PropTypes from 'prop-types';
import React from 'react';

export default function AuthTemplate({ title, children, image }) {
  return (
    <div className="relative  bg-[#233691] h-screen w-screen flex items-center justify-center lg:gap-[105px]">
      <div className="hidden lg:block">
        <img src={image} alt="login" />
      </div>
      <div className="register w-72 lg:w-96 z-20">
        <h2 className="text-white lg:whitespace-nowrap font-medium text-4xl mb-10">
          {title}
        </h2>
        <div>{children}</div>
      </div>
      <img
        src="Radial.png"
        alt="radial"
        className="absolute top-0 right-0 z-10"
      />
    </div>
  );
}

AuthTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired,
};
