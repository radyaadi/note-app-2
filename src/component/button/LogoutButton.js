import React from 'react';
import { MdLogout } from 'react-icons/md';
import PropTypes from 'prop-types';

const LogoutButton = ({ logout, user }) => {
  return (
    <button title="Logout" className="button-logout" onClick={logout}>
      {user}
      <MdLogout />
    </button>
  );
};

LogoutButton.propTypes = {
  logout: PropTypes.func.isRequired,
  user: PropTypes.string.isRequired,
};

export default LogoutButton;
