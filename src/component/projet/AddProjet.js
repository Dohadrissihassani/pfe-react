import React from 'react';
import axios from 'axios';
import ProfSideBar from '../../SideBar/ProfSideBar';
import { useNavigate } from 'react-router-dom';

function AddProjet() {
  const navigate = useNavigate();

  const submit = e => {
    e.preventDefault();

    const titre = e.target[0].value;
    const dateCreation = e.target[1].value;
    const objectif = e.target[2].value;

    const data = {
      titre,
      dateCreation,
      objectif,
    };

    postProjet(data);
  };

  const postProjet = data => {
    axios
      .post('http://localhost:8080/Projets/add', data)
      .then(response => {
        console.log(response);
        navigate('/ListeProjet');
      })
      .catch(err => alert(err));
  };

  return (
    <div>
      <ProfSideBar />
      <div className="content-body">
        <div className="container">
          <h4>Créer un projet</h4>
          <form onSubmit={submit}>
            <label htmlFor="Titre">Titre:</label>
            <input type="text" id="Titre" name="Titre" placeholder="Entrez le Titre du projet" required />
            <label htmlFor="Année">Date de création:</label>
            <input type="date" id="Année" name="Année" placeholder="2024" required />
            <label htmlFor="Objectif">Objectif:</label>
            <input type="text" id="Objectif" name="Objectif" placeholder="Entrez l'Objectif du projet" required />
            <button type="submit">Confirmer</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProjet;
