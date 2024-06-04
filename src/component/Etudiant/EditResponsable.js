import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EtudeSideBar from '../../SideBar/EtudeSideBar';
function EditResponsable() {
  const [etudiants, setEtudiants] = useState([]);
  const [selectedResponsable, setSelectedResponsable] = useState(null);

  useEffect(() => {
    // Fetch students from the backend
    const loadEtudiants = async () => {
      try {
        const result = await axios.get('http://localhost:8080/api/'); // Update with your backend endpoint
        setEtudiants(result.data);
      } catch (err) {
        console.error('Error loading students:', err);
      }
    };

    loadEtudiants();
  }, []);

  const handleSelectionChange = (id) => {
    setSelectedResponsable(id);
  };

  const saveResponsable = async () => {
    try {
      await axios.post('http://localhost:8080/api/', { id: selectedResponsable }); // Update with your backend endpoint
      alert('Responsable saved successfully!');
    } catch (err) {
      console.error('Error saving responsable:', err);
      alert('Failed to save responsable.');
    }
  };

  return (
    <>
    <EtudeSideBar/>
      <div className="content-body">
        <div className="container-fluid mt-3">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Liste des Étudiants</h4>
                  <div className="active-member">
                    <div className="table-responsive">
                      <table className="table table-xs mb-0">
                        <thead>
                          <tr className="tr_table zero-configuration">
                            <th>Le Nom</th>
                            <th>Le prénom</th>
                            <th>Email</th>
                            <th>Code Apogée</th>
                            <th>Choisir Responsable</th>
                          </tr>
                        </thead>
                        <tbody>

                        <tr>
                           <td>Assia</td>
                              <td>EL BOUSSANI</td>
                              <td>ASSIA@gmail</td>
                              <td>2100000</td>
                         <td> <input type="radio" id="etudient" name="etudiant" value="Responsable" /></td>
                                                     </tr>
                            <tr>
                               <td>Rofaydae</td>
                              <td>Alasely</td>
                           <td>Rofaydae@gmail.com</td>
                             <td>2100000</td>
                        <td> <input type="radio" id="etudient" name="etudiant" value="Responsable"/></td>
                             </tr>
                             <tr>
                                  <td>Doha</td>
                                   <td>Drissi</td>
                                   <td>Doha@gmail.com</td>
                                   <td>2100000</td>
                                <td> <input type="radio" id="etudient" name="etudiant" value="Responsable"/></td>
                                 </tr>

                          {etudiants.map(etudiant => (
                            <tr key={etudiant.id}>
                              <td>{etudiant.nom}</td>
                              <td>{etudiant.etprenom}</td>
                              <td>{etudiant.email}</td>
                              <td>{etudiant.codeApogee}</td>
                              <td>
                                <input
                                  type="radio"
                                  name="etudiant"
                                  value={etudiant.id}
                                  checked={selectedResponsable === etudiant.id}
                                  onChange={() => handleSelectionChange(etudiant.id)}
                                />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <button className="btn btn-info" onClick={saveResponsable}>Enregistrer</button>
                </div>
              </div>                        
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
}

export default EditResponsable;
