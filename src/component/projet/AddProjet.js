import React from 'react';
import axios from 'axios';
import ProfSideBar from '../../SideBar/ProfSideBar';
import { useNavigate } from 'react-router-dom';

function AddProjet(props) {
  const navigate = useNavigate();

  const submit = e => {
    e.preventDefault();

    const titre = e.target.titre.value;
    const dateCreation = e.target.dateCreation.value;
    const objectif = e.target.objectif.value;

    let data = {
      titre,
      dateCreation,
      objectif,
      cacher: false,  // Assuming default value for `cacher`
      encadrant: null, // Update as per your actual data structure
      groupe: null  // Update as per your actual data structure
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
      .catch(err => {
        console.error(err);
        alert('Error creating project: ' + err.message);
      });
  };

  return (
    <div>
      <ProfSideBar />
      <div className="content-body">
        <div className="container">
          <h4>Créer un projet</h4>
          <form onSubmit={submit}>
            <label htmlFor="titre">Titre:</label>
            <input type="text" id="titre" name="titre" placeholder="Entrez le Titre du projet" required />
            <label htmlFor="dateCreation">Date de création:</label>
            <input type="text" id="dateCreation" name="dateCreation" placeholder="2024" required />
            <label htmlFor="objectif">Objectif:</label>
            <input type="text" id="objectif" name="objectif" placeholder="Entrez l'Objectif du projet" required />
            <button type="submit">Confirmer</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProjet;
