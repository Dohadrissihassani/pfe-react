import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/login', { email, password });
      console.log(response.data);

      // Show success message
      
    } catch (error) {
      // Show error message
    {/*}  Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Invalid email or password!',
        footer: '<a href="#">Why do I have this issue?</a>',  });*/}
     // Show success message
     Swal.fire({
      icon: 'success',
      title: 'Succès',
      text: 'Vous vous êtes connecté avec succès ! ',
    });
      console.error('Login error:', error);
    }
  };

  return (
    <div className="content-body" style={{ width: '70%' }}>
      <div className="container">
        <h4>Se Connecter</h4>
        <p className="mt-5 login-form__footer">
          Nouveau sur PFEasy{' '}
          <a href="inscrire.html" className="text-primary">
            S'incrire
          </a>
        </p>

        <form onSubmit={handleLogin}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              placeholder="Entrez l'adresse e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Mot de passe :</label>
            <input
              type="password"
              placeholder="Entrez votre mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="btn btn-info" type="submit">
            se connecter
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
