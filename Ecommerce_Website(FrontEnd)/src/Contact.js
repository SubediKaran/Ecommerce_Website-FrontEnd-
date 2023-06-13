import React, { useState } from 'react';
import './loginPage.css'; // Import the CSS file

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginType, setLoginType] = useState('user');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginTypeChange = (event) => {
    setLoginType(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    // Perform login logic based on loginType
    if (username && password) {
      console.log('Login Type:', loginType);
      console.log('Username:', username);
      console.log('Password:', password);
      setErrorMessage('');
    } else {
      setErrorMessage('Please enter both username and password.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-form">
        <h2 className='lahai'>Login Page</h2>
        <div className="form-group">
          <label htmlFor="loginType">Login As:</label>
          <select id="loginType" value={loginType} onChange={handleLoginTypeChange}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
