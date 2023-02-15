import React, { useEffect, useMemo, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthedProvider } from './context/AuthedContext';
import { putAccessToken, getUserLogged } from './util/api';
import useTheme from './hook/useTheme';
import Navigation from './component/Navigation';
import LoginPage from './page/LoginPage';
import RegisterPage from './page/RegisterPage';
import NotePage from './page/NotePage';

const NoteApp = () => {
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const [theme, changeTheme] = useTheme();

  const themeContextValue = useMemo(
    () => ({
      theme,
      changeTheme,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [theme]
  );

  const authedUserContextValue = useMemo(
    () => ({
      authedUser,
      setAuthedUser,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [authedUser]
  );

  useEffect(() => {
    getUserLogged().then((res) => {
      if (!res.error) {
        setAuthedUser(res.data);
        setInitializing(false);
      } else {
        setAuthedUser(null);
        setInitializing(true);
      }
    });
  }, []);

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    getUserLogged().then((res) => {
      if (!res.error) {
        setAuthedUser(res.data);
        setInitializing(false);
      } else {
        setAuthedUser(null);
        setInitializing(true);
      }
    });
  };

  const onLogout = () => {
    setAuthedUser(null);
    putAccessToken('');
  };

  if (initializing) {
    return null;
  }
  return authedUser === null ? (
    <ThemeProvider value={themeContextValue}>
      <AuthedProvider value={authedUserContextValue}>
        <div className="app-container">
          <Navigation logout={onLogout} authed={authedUser} />
          <main>
            <Routes>
              <Route
                path="/*"
                element={<LoginPage loginSuccess={onLoginSuccess} />}
              />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </main>
        </div>
      </AuthedProvider>
    </ThemeProvider>
  ) : (
    <ThemeProvider value={themeContextValue}>
      <AuthedProvider value={authedUserContextValue}>
        <div className="app-container">
          <Navigation logout={onLogout} authed={authedUser} />
          <main>
            <Routes>
              <Route path="/" element={<NotePage />} />
            </Routes>
          </main>
        </div>
      </AuthedProvider>
    </ThemeProvider>
  );
};

export default NoteApp;
