import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../util/api';
import useInput from '../hook/useInput';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [confirmPassword, onConfirmPasswordChange] = useInput('');

  const onRegisterHandler = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Your Password must be same as Confirm Password');
    } else {
      register({ name, email, password }).then((res) => {
        if (!res.error) {
          navigate('/');
        }
      });
    }
  };

  return (
    <section className="register-page">
      <h2>Isi Form terlebih dahulu</h2>
      <div className="input-register">
        <form onSubmit={onRegisterHandler}>
          <label htmlFor="name">Name</label>
          <input type="name" id="name" value={name} onChange={onNameChange} />
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
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={onConfirmPasswordChange}
          />
          <button>Register</button>
        </form>
      </div>
      <p>
        Sudah Punya Akun ? <Link to="/">Login Disini</Link>
      </p>
    </section>
  );
};

export default RegisterPage;
