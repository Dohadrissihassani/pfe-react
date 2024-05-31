import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EtudeSideBar from '../../SideBar/EtudeSideBar';

function AddGroupEtud() {
  const [stateEtudiant, setEtudiantState] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getEtudiant();
  }, []);

  const getEtudiant = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/etudiants'); // Update with your backend endpoint
      const etudiants = response.data;
      setEtudiantState(
        etudiants.map(d => ({
          select: false,
          id: d.id,
          nom: d.nom,
          prenom: d.prenom,
          codeApogee: d.codeApogee
        }))
      );
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSelect = (id) => {
    setEtudiantState(stateEtudiant.map(etudiant => 
      etudiant.id === id ? { ...etudiant, select: !etudiant.select } : etudiant
    ));
  };

  const createGroup = async () => {
    const selectedStudents = stateEtudiant.filter(etudiant => etudiant.select);
    if (selectedStudents.length === 0) {
      alert('Veuillez sélectionner au moins un étudiant.');
      return;
    }

    try {
      // Send the selected students to your backend to create a group
      await axios.post('http://localhost:8080/api/groupes', selectedStudents);
      alert('Groupe créé avec succès!');
      // Optionally, clear selections or refresh list
      getEtudiant();
    } catch (err) {
      alert('Échec de la création du groupe: ' + err.message);
    }
  };

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur: {error}</div>;

  return (
    <>
      <EtudeSideBar />
      <div className="content-body">
        <div className="container-fluid mt-3">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  
                  <h4 className="card-title">Liste des Étudiants</h4>
                  <button className="btn btn-info" onClick={createGroup}>Créer un Groupe</button>
                  <table className="table table-striped table-hover mt-3 text-center table-bordered">
                    <thead>
                      <tr>
                        <th>Le Nom</th>
                        <th>Le prénom</th>
                        <th>Code Apogée</th>
                        <th>Choisissez votre partenaire</th>
                      </tr>
                    </thead>
                    <tbody id="data">
                      {stateEtudiant.map(etudiant => (
                        <tr key={etudiant.id}>
                          <td>{etudiant.nom}</td>
                          <td>{etudiant.prenom}</td>
                          <td>{etudiant.codeApogee}</td>
                          <td>
                            <button 
                              className={`btn ${etudiant.select ? 'btn-success' : 'btn-light'}`}
                              onClick={() => handleSelect(etudiant.id)}
                            >
                              <i className="bi bi-check-square"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddGroupEtud;
