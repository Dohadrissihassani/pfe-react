import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Ensure react-router-dom is installed and imported
import EtudeSideBar from '../../SideBar/EtudeSideBar';

function EditGroupEtud() {
  const [etudiants, setEtudiants] = useState([]);

  useEffect(() => {
    // Fetch group data from the backend when the component mounts
    axios.get('/api/group')
      .then(response => {
        setEtudiants(response.data.etudiants);
      })
      .catch(error => {
        console.error("Error fetching group data:", error);
      });
  }, []);

  const deleteEtudiant = (id) => {
    // Delete student by id
    axios.delete(`/api/etudiant/${id}`)
      .then(response => {
        // Remove the deleted student from the state
        setEtudiants(etudiants.filter(etudiant => etudiant.id !== id));
      })
      .catch(error => {
        console.error("Error deleting student:", error);
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
                  <h4 className="card-title">Modifier votre  Groupe</h4>
                  <div className="active-etudiant">
                    <div className="table-responsive">
                      <table className="table table-xs mb-0">
                        <thead>
                          <tr className="tr_table zero-configuration">
                            <th>Le Nom</th>
                            <th>Le prénom</th>
                            <th>Email</th>
                            <th>Code Apogée</th>
                            <th> supprimer  member dans Groupe  </th>
                          </tr>
                        </thead>
                        <tbody>

                            
                              <tr>
                              <td> Drissi hassani</td>
                              <td> Doha</td>
                              <td>doha@gmail.com</td>
                              <td>4444422</td>
                               <td > <button className="btn btn-light" >
                                  <i className="bi bi-trash"></i>
                                </button>
                                </td>
                              </tr> 
                          {etudiants.map(etudiant => (
                            <tr key={etudiant.id}>
                              <td>{etudiant.nom}</td>
                              <td>{etudiant.prenom}</td>
                              <td>{etudiant.email}</td>
                              <td>{etudiant.codeApogee}</td>
                              <td>
                                <button className="btn btn-light" onClick={() => deleteEtudiant(etudiant.id)}>
                                  <i className="bi bi-trash"></i>
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
        </div>
      </div>
    </>
  );
}

export default EditGroupEtud;
