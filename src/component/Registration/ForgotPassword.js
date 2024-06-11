import React, { useState } from 'react';
import axios from 'axios'; // Ensure axios is installed: npm install axios

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/forgot-password', { email });
      setMessage('A password reset link has been sent to your email.');
      setError('');
    } catch (error) {
      setError('Failed to send password reset email. Please try again.');
      setMessage('');
    }
  };

  return (
    <div className="content-body" style={{ width: "70%" }}>
      <div className="container">
        <h4>Réinitialiser le mot de passe</h4>
        <p className="mt-5 login-form__footer">Veuillez entrer votre adresse e-mail pour réinitialiser votre mot de passe</p>
        <form onSubmit={handleForgotPassword}>
          <label htmlFor="email">Adresse e-mail :</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Entrez l'adresse e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Envoyer</button>
        </form>
        {message && <p>{message}</p>}
        {error && <p>{error}</p>}
      </div>
    </div>
  );
}

export default ForgotPassword;
