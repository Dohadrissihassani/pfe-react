import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProfesseurRow from './ProfesseurRow';
import { Link } from 'react-router-dom';
import AdminSideBar from '../../SideBar/AdminSideBar';

function Professeur() {
  const [stateProfesseur, setProfesseurState] = useState([]);

  useEffect(() => {
    getProfesseur();
  }, []);

  const getProfesseur = () => {
    axios
     .get("http://localhost:8080/professeur/info")
     .then(response => {
        let Professeur = response.data;
        setProfesseurState(
          Professeur.map(d => ({
            id: d.id,
            nom: d.nom,
            email: d.email,
            telephone:d.telephone,
            departement: d.departement
          }))
        );
      })
     .catch(err => alert(err));
  };

  return (
    <>
      <AdminSideBar />
      <div>
        <div className="content-body">
          <div className="container-fluid mt-3">
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">La Liste des Professeurs</h4>
                    <div className="active-member">
                      <Link to="/creeProfesseur">
                        <div className="row">
                          <div className="col-7">
                            <div className="text-left">
                              <button className="btn btn-info">+Ajouter</button>
                            </div>
                          </div>
                        </div>
                      </Link>

                      <div className="table-responsive">
                        <table className="table table-xs mb-0">
                          <thead>
                            <tr className="tr_table zero-configuration">
                              <th>Le Nom</th>
                              <th>Email</th>
                              <th>Telephone</th>
                              <th>Département</th>
                              <th>Operation</th>
                            </tr>
                          </thead>
                          <tbody>
                            <ProfesseurRow
                              stateProfesseur={stateProfesseur}
                            />
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
      </div>
    </>
  );
}

export default Professeur;