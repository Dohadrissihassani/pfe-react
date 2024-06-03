import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EtudeSideBar from '../../SideBar/EtudeSideBar';

function EditCompEtudiant() {
  const [stateEtud, setStateEtud] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getEtudiantById(id);
  }, [id]);

  const getEtudiantById = (id) => {
    axios.get(`URL/${id}`)
      .then(d => {
        let etudiant = d.data;
        setStateEtud({
          id: etudiant.id,
          prenom: etudiant.prenom,
          nom: etudiant.nom,
          adressEmail: etudiant.adressEmail,
          codeApogee: etudiant.codeApogee,
          telephone: etudiant.telephone,
          filiere: etudiant.filiere,
          motdepasse: etudiant.motdepasse
        });
      })
      .catch(err => alert(err));
  };

  const putEtudiant = (e) => {
    e.preventDefault();
    axios.put(`URL/${stateEtud.id}`, stateEtud)
      .then(d => {
        navigate("/");
      })
      .catch(err => alert(err));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStateEtud(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <>
      <EtudeSideBar />
      <div className="content-body">
        <div className="container" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          <h4>Modifier votre compte</h4>
          <form onSubmit={putEtudiant}>
            <label htmlFor="prenom">Prénom :</label>
            <input value={stateEtud.prenom || ''}
                   onChange={handleChange}
                   type="text" id="prenom" name="prenom" placeholder="Entrez le prénom" required />

            <label htmlFor="nom">Nom :</label>
            <input value={stateEtud.nom || ''}
                   onChange={handleChange}
                   type="text" id="nom" name="nom" placeholder="Entrez le nom" required />

            <label htmlFor="adressEmail">Adresse e-mail :</label>
            <input value={stateEtud.adressEmail || ''}
                   onChange={handleChange}
                   type="email" id="adressEmail" name="adressEmail" placeholder="Entrez l'adresse e-mail" required />

            <label htmlFor="codeApogee">Code Apogée:</label>
            <input value={stateEtud.codeApogee || ''}
                   onChange={handleChange}
                   type="text" id="codeApogee" name="codeApogee" placeholder="Entrez le code Apogée" required />

            <label htmlFor="telephone">Téléphone :</label>
            <input value={stateEtud.telephone || ''}
                   onChange={handleChange}
                   type="tel" id="telephone" name="telephone" placeholder="Entrez le numéro de téléphone" required />

            <label htmlFor="filiere">Filière :</label>
            <select value={stateEtud.filiere || ''}
                    onChange={handleChange}
                    id="filiere" name="filiere">
              <option value="SMI">SMI</option>
              <option value="SMA">SMA</option>
              <option value="SMC">SMC</option>
              <option value="SMP">SMP</option>
              <option value="STU">STU</option>
              <option value="SVI">SVI</option>
            </select>

            <label htmlFor="motdepasse">Mot de passe :</label>
            <input value={stateEtud.motdepasse || ''}
                   onChange={handleChange}
                   type="password" id="motdepasse" name="motdepasse" placeholder="Entrez votre mot de passe" required />

            <button type="submit">Confirmer</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditCompEtudiant;
