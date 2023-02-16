import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './button/LogoutButton';
import AuthedContext from '../context/AuthedContext';
import PropTypes from 'prop-types';

const Navigation = ({ logout }) => {
  const { authedUser } = useContext(AuthedContext);

  return (
    <>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/archives">Archive</Link>
          </li>
        </ul>
      </nav>
      <LogoutButton logout={logout} user={authedUser.name} />
    </>
  );
};

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default Navigation;
