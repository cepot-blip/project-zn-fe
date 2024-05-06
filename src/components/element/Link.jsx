import PropTypes from 'prop-types';
import React from 'react';

export default function Link({ href, onClick, children, ...props }) {
  return (
    <a {...props} href={href} onClick={onClick}>
      {children}
    </a>
  );
}

Link.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

Link.defaultProps = {
  href: '#',
  onClick: () => {},
  children: '',
};
