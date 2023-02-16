import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthedContext from '../context/AuthedContext';
import LocaleContext from '../context/LocaleContext';
import ThemeTogglerButton from './button/ThemeTogglerButton';
import LocaleTogglerButton from './button/LocaleTogglerButton';
import Navigation from './Navigation';
import PropTypes from 'prop-types';

const HeaderBar = ({ logout }) => {
  const { authedUser } = useContext(AuthedContext);
  const { locale } = React.useContext(LocaleContext);

  return (
    <header>
      <h1>
        <Link to="/">{locale === 'id' ? 'Aplikasi Catatan' : 'Note Apps'}</Link>
      </h1>
      <LocaleTogglerButton />
      <ThemeTogglerButton />
      {authedUser ? <Navigation logout={logout} /> : ''}
    </header>
  );
};

HeaderBar.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default HeaderBar;
