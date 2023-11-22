// Login.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useAuthStore from './authStore';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const authenticate = useAuthStore((state) => state.authenticate);

  const handleLogin = () => {
    authenticate(username, password);
    if (useAuthStore.getState().isAuthenticated) {
      history.push('/userIndexPage');
    } else {
      // Gérer l'échec de l'authentification ici
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;