import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Switch_Role() {
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (role === 'role1') {
      navigate('/LesProjetsResponsable');
    } else if (role === 'role2') {
      navigate('/MonProfil');
    } else {
      alert('Veuillez choisir un rôle');
    }
  };

  return (
    <div className="container">
      <h1>Bienvenue !</h1>
      <p>Veuillez choisir votre rôle :</p>
      <form onSubmit={handleSubmit}>
        <label>
          Responsable de PFE :
          <input
            type="radio"
            name="role"
            value="role1"
            checked={role === 'role1'}
            onChange={handleRoleChange}
          />
        </label>
        <br />
        <label>
          Encadrant:
          <input
            type="radio"
            name="role"
            value="role2"
            checked={role === 'role2'}
            onChange={handleRoleChange}
          />
        </label>
        <br /><br />
        <button type="submit" id="continueButton">Continuer</button>
      </form>
    </div>
  );
}

export default Switch_Role;
