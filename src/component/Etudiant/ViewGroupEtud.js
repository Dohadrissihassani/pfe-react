import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import EtudeSideBar from '../../SideBar/EtudeSideBar';

function ViewGroupEtud() {
  const location = useLocation();
  const [createdGroup, setCreatedGroup] = useState(location.state?.createdGroup || {});

  useEffect(() => {
    // No need to fetch current user information here if you don't plan to use it
  }, []);

  return (
    <>
      <EtudeSideBar />
      <div className="content-body">
        <div className="container-fluid mt-3">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Groupe Créé</h4>
                  <div className="active-member">
                    <div className="table-responsive">
                      <table className="table table-xs mb-0">
                        <thead>
                          <tr className="tr_table zero-configuration">
                            <th>Le Nom du groupe</th>
                            <th>Étudiant 1</th>
                            <th>Étudiant 2</th>
                            <th>Étudiant 3</th>
                          </tr>
                        </thead>
                        <tbody>
                          {createdGroup && createdGroup.etudiantNames && (
                            <tr>
                              <td>{createdGroup.nom}</td>
                              <td>{createdGroup.etudiantNames[0]}</td>
                              <td>{createdGroup.etudiantNames[1]}</td>
                              <td>{createdGroup.etudiantNames[2]}</td>
                            </tr>
                          )}
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
