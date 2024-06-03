import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EtudeSideBar from '../../SideBar/EtudeSideBar';

function CreateGroup() {
  const [etudiants, setEtudiants] = useState([]);
  const [selectedEtudiants, setSelectedEtudiants] = useState([]);

  useEffect(() => {
    getEtudiants();
  }, []);

  const getEtudiants = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/etudiants');
      const etudiants = response.data;
      setEtudiants(
        etudiants.map(d => ({
          id: d.id,
          nom: d.nom,
          prenom: d.prenom,
          email: d.email,
          codeApogee: d.codeApogee
        }))
      );
    } catch (err) {
      console.error("Error fetching students:", err);
      alert(err);
    }
  };

  const handleAddStudent = (etudiant) => {
    const updatedSelectedEtudiants = [...selectedEtudiants, etudiant];
    setSelectedEtudiants(updatedSelectedEtudiants);
  };

  const handleRemoveStudent = (etudiant) => {
    const updatedSelectedEtudiants = selectedEtudiants.filter(
      selectedEtudiant => selectedEtudiant.id !== etudiant.id
    );
    setSelectedEtudiants(updatedSelectedEtudiants);
  };

  const handleCheckboxChange = (etudiant) => {
    if (selectedEtudiants.some(selectedEtudiant => selectedEtudiant.id === etudiant.id)) {
      handleRemoveStudent(etudiant);
    } else {
      handleAddStudent(etudiant);
    }
  };

  const handleCreateGroup = () => {
    const groupLeader = selectedEtudiants.length > 0 ? selectedEtudiants[0] : null;
    axios.post('/api/groups', { etudiants: selectedEtudiants, groupLeader })
      .then(response => {
        console.log('Group created successfully:', response.data);
        setSelectedEtudiants([]);
      })
      .catch(error => {
        console.error('Error creating group:', error);
      });
  };

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
                  <button className="btn btn-info" onClick={handleCreateGroup}>Créer un Groupe</button>
                  <table className="table table-striped table-hover mt-3 text-center table-bordered">
                    <thead>
                      <tr>
                        <th>Le Nom</th>
                        <th>Le prénom</th>
                        <th>Email</th>
                        <th>Code Apogée</th>
                        <th>Choisissez votre partenaire</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td> Drissi hassani</td>
                        <td> Doha</td>
                        <td>doha@gmail.com</td>
                        <td>4444422</td>
                        <td>  <label class="switch"><input type="checkbox" />
                          <span class="slider round"></span>
                        </label> </td>
                      </tr>
                      <tr>
                        <td> Drissi hassani</td>
                        <td> Doha</td>
                        <td>doha@gmail.com</td>
                        <td>4444422</td>
                        <td>  <label class="switch"><input type="checkbox" />
                          <span class="slider round"></span>
                        </label> </td>
                      </tr>
                      {etudiants.map((etudiant, index) => (
                        <tr key={index}>
                          <td>{etudiant.nom}</td>
                          <td>{etudiant.prenom}</td>
                          <td>{etudiant.email}</td>
                          <td>{etudiant.codeApogee}</td>
                          <td>
                            <label className="switch">
                              <input
                                type="checkbox"
                                checked={selectedEtudiants.some(selectedEtudiant => selectedEtudiant.id === etudiant.id)}
                                onChange={() => handleCheckboxChange(etudiant)}
                              />
                              <span className="slider round"></span>
                            </label>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="mt-4">

                    <ul>
                      {selectedEtudiants.map((etudiant, index) => (
                        <li key={index}>
                          {etudiant.nom} {etudiant.prenom} ({etudiant.email}) - {etudiant.codeApogee}
                          <button className="btn btn-danger btn-sm ml-2" onClick={() => handleRemoveStudent(etudiant)}>Remove</button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateGroup;
