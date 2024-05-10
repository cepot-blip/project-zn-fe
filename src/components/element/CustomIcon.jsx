import PropTypes from 'prop-types';
import React from 'react';

export default function CustomIcon({ Name, ...props }) {
  return <Name {...props} />;
}

CustomIcon.propTypes = {
  Name: PropTypes.string.isRequired,
};
