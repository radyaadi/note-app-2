import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from '../context/ThemeContext';

const Navigation = ({ logout, authed }) => {
  const { theme, changeTheme } = useContext(ThemeContext);
  return (
    <header>
      <h1>
        <a href="/">Aplikasi Catatan</a>
      </h1>
      <nav className="navigation">
        <ul>
          <li>
            <button className="toggle-locale" type="button">
              a
            </button>
          </li>
          <li>
            <button
              className="toggle-theme"
              type="button"
              onClick={() => changeTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? 'dark' : 'light'}
            </button>
          </li>
          <li>
            <Link to="/" onClick={logout}>
              Si Logout
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
