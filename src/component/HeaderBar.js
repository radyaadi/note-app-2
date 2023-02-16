import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthedContext from '../context/AuthedContext';
import ThemeTogglerButton from './button/ThemeTogglerButton';
import Navigation from './Navigation';
import PropTypes from 'prop-types';

const HeaderBar = ({ logout }) => {
  const { authedUser } = useContext(AuthedContext);

  return (
    <header>
      <h1>
        <Link to="/">Aplikasi Catatan</Link>
      </h1>
      <ThemeTogglerButton />
      {authedUser ? <Navigation logout={logout} /> : ''}
    </header>
  );
};

HeaderBar.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default HeaderBar;
