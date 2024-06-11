import axios from 'axios';
import React, { useEffect, useState } from 'react';
import EtudeSideBar from '../../SideBar/EtudeSideBar';
import { useNavigate } from 'react-router-dom';

function CreateGroup(props) {
  const [etudiants, setEtudiants] = useState([]);
  const [selectedEtudiant1, setSelectedEtudiant1] = useState('');
  const [selectedEtudiant2, setSelectedEtudiant2] = useState('');
  const [selectedEtudiant3, setSelectedEtudiant3] = useState('');
  const [groupName, setGroupName] = useState('');
  const [groupSize, setGroupSize] = useState(2); // Default to group size of 2
  const navigate = useNavigate();

  useEffect(() => {
    fetchEtudiants();
  }, []);

  const fetchEtudiants = async () => {
    try {
      const response = await axios.get('http://localhost:8080/Etudiant/info');
      setEtudiants(response.data);
    } catch (err) {
      console.error("Error fetching students:", err);
      alert(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let selectedEtudiants = [selectedEtudiant1];

    // Add selectedEtudiant2 if it exists and group size is greater than 2
    if (groupSize > 2 && selectedEtudiant2) {
      selectedEtudiants.push(selectedEtudiant2);
    }

<<<<<<< HEAD
    // Add selectedEtudiant3 if it exists and group size is 3
    if (groupSize === 3 && selectedEtudiant3) {
      selectedEtudiants.push(selectedEtudiant3);
    }

    const groupData = {
      nom: groupName,
      etudiantIds: selectedEtudiants
    };

    try {
      const response = await axios.post('http://localhost:8080/Groupes/groupe', groupData);
      navigate('/view-group', { state: { createdGroup: response.data } }); // Navigate to ViewGroupEtud with created group data
    } catch (err) {
      console.error("Error creating group:", err);
      alert(err);
=======
  const handleCreateGroup = async () => {
    const groupLeader = selectedEtudiants.length > 0 ? selectedEtudiants[0] : null;
    try {
      const response = await axios.post('http://localhost:8080/api/groups', {
        etudiants: selectedEtudiants,
        groupLeader
      });
      console.log('Group created successfully:', response.data);
      setSelectedEtudiants([]);
    } catch (error) {
      console.error('Error creating group:', error);
>>>>>>> 3b3156a3ab5223f9973c4eede95b1984ee12c17f
    }
  };

  return (
    <>
      <EtudeSideBar />
      <div className="content-body">
<<<<<<< HEAD
        <div className="container">
          <h4>Créer Un Groupe</h4>
          <form onSubmit={handleSubmit}>
            <label>Nom Du Groupe</label>
            <input 
              type="text" 
              id='nom' 
              placeholder="Le Nom" 
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
            />
            <label htmlFor="groupSize">Taille du Groupe:</label>
            <select 
              id="groupSize" 
              name="groupSize" 
              value={groupSize} 
              onChange={(e) => setGroupSize(parseInt(e.target.value))}
            >
              <option value={2}>Groupe de 2</option>
              <option value={3}>Groupe de 3</option>
            </select>
            <label htmlFor="etudiant1">Étudiant(e) 1:</label>
            <select 
              id="etudiant1" 
              name="Etudiant1" 
              value={selectedEtudiant1} 
              onChange={(e) => setSelectedEtudiant1(e.target.value)}
            >
              <option value="">Sélectionner un étudiant</option>
              {etudiants.map((etudiant) => (
                <option key={etudiant.id} value={etudiant.id}>{etudiant.nom} {etudiant.etprenom}</option>
              ))}
            </select>
            <label htmlFor="etudiant2">Étudiant(e) 2:</label>
            <select 
              id="etudiant2" 
              name="etudiant2" 
              value={selectedEtudiant2} 
              onChange={(e) => setSelectedEtudiant2(e.target.value)}
            >
              <option value="">Sélectionner un étudiant</option>
              {etudiants.map((etudiant) => (
                <option key={etudiant.id} value={etudiant.id}>{etudiant.nom} {etudiant.etprenom}</option>
              ))}
            </select>
            {groupSize === 3 && (
              <>
              <label htmlFor="etudiant3">Étudiant(e) 3:</label>
              <select 
                id="etudiant3" 
                name="etudiant3" 
                value={selectedEtudiant3} 
                onChange={(e) => setSelectedEtudiant3(e.target.value)}
              >
                <option value="">Sélectionner un étudiant</option>
                {etudiants.map((etudiant) => (
                  <option key={etudiant.id} value={etudiant.id}>{etudiant.nom} {etudiant.etprenom}</option>
                ))}
              </select>
              </>
            )}
            <button type="submit">Confirmer</button>
          </form>
=======
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
>>>>>>> 3b3156a3ab5223f9973c4eede95b1984ee12c17f
        </div>
      </div>
    </>
  );
}

export default CreateGroup;
