import React, { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import { FiSun } from 'react-icons/fi';
import { BiMoon } from 'react-icons/bi';

const ThemeTogglerButton = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  return (
    <button
      className="toggle-theme"
      type="button"
      onClick={() => changeTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <FiSun /> : <BiMoon />}
    </button>
  );
};

export default ThemeTogglerButton;
