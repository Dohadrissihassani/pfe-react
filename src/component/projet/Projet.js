import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ProjetRow from './ProjetRow';
import ProfSideBar from '../../SideBar/ProfSideBar';

function Projet() {

  const [projets, setProjets] = useState([]);
    const [stateProjet,setProjetState ] = useState([]);

       useEffect(() => {
        getProjet();
      }, []);

      const getProjet =()=>{
        axios
        .get("  ")
        .then(response=>{
          let Projet =response.data
          setProjetState(
              Projet.map(d=> ({
                select: false,
                id : d.id,
                titre: d.titre,
                dateCreation: d.dateCreation
              }

              )

              )
          );

        }).catch(err=> alert(err));
      };
    const sendTest= () =>{
        console.log("asdf");
    }



  useEffect(() => {
    getProjets();
  }, []);

  const getProjets = () => {
    axios
      .get("/api/projets")
      .then((response) => {
        setProjets(response.data.filter(projet => !projet.archived));
      })
      .catch((error) => {
        console.error('Error fetching projets:', error);
      });
  };

  return (
    <div>
        <ProfSideBar/>
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
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {projets.map((projet) => (
                          <ProjetRow key={projet.id} projet={projet} getProjets={getProjets} />
                        ))}
                        <tr>
                            <td>Gestion du pfe</td>
                            <td>22/06/2024</td>
                            <td> <button className="btn btn-light">
            <i className="bi bi-box-arrow-down"></i> 
          </button></td>
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
    </div>
  );
}

export default Projet;
