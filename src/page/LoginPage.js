import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../util/api';
import LocaleContext from '../context/LocaleContext';
import useInput from '../hook/useInput';
import PropTypes from 'prop-types';

const LoginPage = ({ loginSuccess }) => {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  const { locale } = React.useContext(LocaleContext);

  const onSubmitLoginForm = async (event) => {
    event.preventDefault();
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  };

  return (
    <section className="login-page">
      <h2>{locale === 'id' ? 'Login terlebih dahulu' : 'Login First'}</h2>
      <div className="input-login">
        <form onSubmit={onSubmitLoginForm}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={onEmailChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={onPasswordChange}
          />
          <button>Login</button>
        </form>
      </div>
      <p>
        {locale === 'id' ? 'Belum Punya Akun ? ' : `Don't have an account ? `}
        <Link to="/register">
          {locale === 'id' ? 'Register Disini' : 'Register Here'}
        </Link>
      </p>
    </section>
  );
};

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
