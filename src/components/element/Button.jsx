import PropTypes from 'prop-types';
import React from 'react';

export default function Button({
  fullrounded,
  outline,
  onClick,
  children,
  className,

  ...props
}) {
  if (fullrounded) {
    return (
      <button
        {...props}
        onClick={onClick}
        type="button"
        className={`${outline ? 'border-white hover:bg-white hover:text-[#FF872E] border w-full h-14 rounded-full' : `${className} rounded-full font-semibold text-xl `}`}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      {...props}
      onClick={onClick}
      type="submit"
      className="w-full flex items-center justify-center h-14 bg-[#FF872E] hover:bg-green-400 hover:scale-105 active:scale-95 rounded-[10px] font-semibold text-xl text-white"
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,

  fullrounded: PropTypes.bool,
  outline: PropTypes.bool,
  className: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  children: '',

  fullrounded: false,
  outline: false,
  className: 'bg-[#FF872E]  hover:bg-green-400  w-full h-14 text-white',
};
