import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import GroupeRow from './GroupeRow';
import EtudeSideBar from '../../SideBar/EtudeSideBar';
function GroupEtudView() {
 
  const [stateGroupe, setGroupeState] = useState([]);

  useEffect(() => {
    getGroupe();
  }, []);

  const getGroupe = () => {
    axios
        .get("http://localhost:9090/professeur/info")
        .then(response => {
            let Groupe= response.data;
            setGroupeState(
           Groupe.map( d=> ({
                    select : false,
                    id:d.id,
                    id :d.projet.titre
                }))
            );

         } )
            .catch(err => alert(err));
};

  return (
    <>
    <EtudeSideBar/>
   
    <div className="content-body">
    hada dyal etidiant
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">La Liste des Groupes</h4>
                <div className="active-member">
                  <div className="table-responsive">
                    <table className="table table-xs mb-0">
                      <thead>
                        <tr className="tr_table zero-configuration">
                          <th>Groupe</th>
                          <th>Projet</th>
                          <th>Mombres</th>
                        </tr>
                      </thead>
                      <tbody>
                        <GroupeRow stateGroupe={stateGroupe} />
                        {/*example of seeing just for a while*/}
                        <tr>
                          <td>groupe 1</td>
                          <td>gestion pfe</td>
                          <td>
                          <Link to={`/ViewGroup`}> <button className="btn btn-light">
                          <i className="fa-solid fa-eye"></i>
          </button></Link>
          </td>
                        </tr>
                      </tbody>
                    </table>
                  
                  </div>
                     {/* Pagination */}
                     <div className="row" style={{ float: 'right' }}>
                        <div className="col-12 text-center pagination-container">

                          <button className="btn btn-info icon-btn ms btn-previous">
                            <i class="bi bi-arrow-left-square"></i>
                          </button>
                          <button className="btn btn-info icon-btn ms btn-next">
                            <i class="bi bi-arrow-right-square"></i>
                          </button>
                      </div>
                  {/*
                  <button className="btn btn-info mt-3">
                    <Link to="/groups/add" style={{ color: 'white', textDecoration: 'none' }}>
                      Créer un Groupe
                    </Link>
  </button>*/}
  
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



export default GroupEtudView