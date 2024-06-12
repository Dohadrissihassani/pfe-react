import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
      navigate('/view-group', { state: { createdGroup: response.data } });
    } catch (err) {
      console.error("Error creating group:", err);
      alert(err);
    }
  };

  return (
    <>
      <EtudeSideBar />
      <div className="content-body">
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
        </div>
      </div>
    </>
  );
}

export default CreateGroup;
