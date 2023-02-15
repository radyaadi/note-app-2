import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../util/api';
import useInput from '../hook/useInput';

const LoginPage = ({ loginSuccess }) => {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  const onSubmitLoginForm = async (event) => {
    event.preventDefault();

    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  };
  return (
    <section className="login-page">
      <h2>Login terlebih dahulu</h2>
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
        Belum Punya Akun ? <Link to="/register">Register Disini</Link>
      </p>
    </section>
  );
};

export default LoginPage;
