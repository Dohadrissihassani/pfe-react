import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import GroupeRow from './GroupeRow';

function Groupe() {
  const [stateGroupe, setGroupeState] = useState([]);

  useEffect(() => {
    getGroupe();
  }, []);

  const getGroupe = () => {
    axios
      .get('/api/groupes') // replace with your actual endpoint
      .then(data => {
        setGroupeState(data.data);
      })
      .catch(err => alert(err));
  };

  return (
    <div className="content-body">
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
                          <th>Consulter</th>
                        </tr>
                      </thead>
                      <tbody>
                        <GroupeRow stateGroupe={stateGroupe} />
                      </tbody>
                    </table>
                  </div>
                  <button className="btn btn-info mt-3">
                    <Link to="/groups/add" style={{ color: 'white', textDecoration: 'none' }}>
                      Créer un Groupe
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Groupe;
