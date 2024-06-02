import React, { useState } from 'react';
import axios from 'axios'; // You may need to install axios: npm install axios

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/login', { email, password });
      console.log(response.data);
      // Redirect or perform further actions based on response
    } catch (error) {
      setError('Invalid email or password');
      console.error('Login error:', error);
    }
  };

  return (
    <div class="content-body">
         
    <div class="container" >
    <h4>Se Connecter</h4>
    <p class="mt-5 login-form__footer">Nouveau sur PFEasy<a href="inscrire.html" class="text-primary">S'incrire</a> </p>

      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Mot de passe :</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Confirmer</button>
      </form>
    </div>
    </div>
  );
}

export default Login;
