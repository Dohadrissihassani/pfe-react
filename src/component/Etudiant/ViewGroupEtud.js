import React, { useEffect, useState } from 'react';
import EtudeSideBar from '../../SideBar/EtudeSideBar';
import axios from 'axios';

function ViewGroupEtud() {
  const [createdGroup, setCreatedGroup] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/Groupes/list');
        if (response.data.length > 0) {
          setCreatedGroup(response.data[0]); // Assuming the first group is the one created
        }
      } catch (error) {
        console.error('Error fetching group:', error);
      }
    };

    fetchData();
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
                          <tr>
                            <td>{createdGroup.nom}</td>
                            <td>{createdGroup.etudiantNames ? createdGroup.etudiantNames[0] : ''}</td>
                            <td>{createdGroup.etudiantNames ? createdGroup.etudiantNames[1] : ''}</td>
                            <td>{createdGroup.etudiantNames ? createdGroup.etudiantNames[2] : ''}</td>
                          </tr>
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
