import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EtudeSideBar from '../../SideBar/EtudeSideBar';

function ViewGroupEtud() {
  const [etudiants, setEtudiants] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    loadEtudiants();
  }, []);

  const loadEtudiants = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/`); // Update with your backend endpoint
      setEtudiants(result.data);
    } catch (err) {
      console.error('Error loading etudiants:', err);
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
                  <h4 className="card-title">Mon Groupe</h4>
                  <div className="active-member">
                    <div className="table-responsive">
                      <table className="table table-xs mb-0">
                        <thead>
                          <tr className="tr_table zero-configuration">
                            <th>Le Nom</th>
                            <th>Le prénom</th>
                            <th>Email</th>
                            <th>Code Apogée</th>
                          </tr>
                        </thead>
                        <tbody>
                          {etudiants.map((etudiant) => (
                            <tr key={etudiant.id}>
                              <td>{etudiant.nom}</td>
                              <td>{etudiant.etprenom}</td>
                              <td>{etudiant.email}</td>
                              <td>{etudiant.codeApogee}</td>
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

export default ViewGroupEtud;
