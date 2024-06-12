import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ProjetRow from './ProjetRow';
import ProfSideBar from '../../SideBar/ProfSideBar';

function Projet() {
  const [projets, setProjets] = useState([]);

  useEffect(() => {
    getProjet();
  }, []);

  const getProjet = () => {
    axios
      .get("http://localhost:8080/Projets/projet")
      .then(response => {
        setProjets(response.data);
      })
      .catch(err => alert(err));
  };

  return (
    <div>
      <ProfSideBar />
      <div className="content-body">
        <div className="container-fluid mt-3">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Liste du Projects</h4>
                  <div className="active-member">
                    <Link to="/creeProjet">
                      <div className="row">
                        <div className="col-7">
                          <div className="text-left">
                            <button>+Ajouter</button>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <div className="table-responsive">
                      <table className="table table-xs mb-0">
                        <thead>
                          <tr className="tr_table zero-configuration">
                            <th>Nom de projet</th>
                            <th>Date de Création</th>
                            <th>Operation</th>
                          </tr>
                        </thead>
                        <tbody>
                          {projets.map((projet) => (
                            <ProjetRow key={projet.id} projet={projet} getProjets={getProjet} />
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
    </div>
  );
}

export default Projet;
