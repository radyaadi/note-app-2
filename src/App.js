import React, { useEffect, useMemo, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthedProvider } from './context/AuthedContext';
import { LocaleProvider } from './context/LocaleContext';
import { putAccessToken, getUserLogged } from './util/api';
import useTheme from './hook/useTheme';
import HeaderBar from './component/HeaderBar';
import LoginPage from './page/LoginPage';
import RegisterPage from './page/RegisterPage';
import NotePage from './page/NotePage';
import AddNotePage from './page/AddNotePage';
import DetailNotePage from './page/DetailNotePage';
import ArchiveNotePage from './page/ArchiveNotePage';

const NoteApp = () => {
  const [authedUser, setAuthedUser] = useState(null);
  const [locale, setLocale] = useState('id');
  const [theme, changeTheme] = useTheme();
  const [initializing, setInitializing] = useState(true);

  const toggleLocale = () => {
    localStorage.setItem('locale', locale === 'id' ? 'en' : 'id');
    setLocale((prevLocale) => (prevLocale === 'id' ? 'en' : 'id'));
  };

  const localeContextValue = useMemo(
    () => ({
      locale,
      toggleLocale,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [locale]
  );

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
      } else {
        setAuthedUser(null);
      }
      setInitializing(false);
    });

    if (localStorage.locale && ['id', 'en'].includes(localStorage.locale)) {
      setLocale(localStorage.locale);
    }
  }, []);

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    getUserLogged().then((res) => {
      if (!res.error) {
        setAuthedUser(res.data);
      } else {
        setAuthedUser(null);
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
        <LocaleProvider value={localeContextValue}>
          <div className="app-container">
            <HeaderBar logout={onLogout} authed={authedUser} />
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
        </LocaleProvider>
      </AuthedProvider>
    </ThemeProvider>
  ) : (
    <ThemeProvider value={themeContextValue}>
      <AuthedProvider value={authedUserContextValue}>
        <LocaleProvider value={localeContextValue}>
          <div className="app-container">
            <HeaderBar logout={onLogout} authed={authedUser} />
            <main>
              <Routes>
                <Route path="/" element={<NotePage />} />
                <Route path="/notes/new" element={<AddNotePage />} />
                <Route path="/archives" element={<ArchiveNotePage />} />
                <Route path="/note/:id" element={<DetailNotePage />} />
              </Routes>
            </main>
          </div>
        </LocaleProvider>
      </AuthedProvider>
    </ThemeProvider>
  );
};

export default NoteApp;
