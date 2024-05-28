import React from 'react';
import ProjetRow from './ProjetRow';



function ArchivedProjet({ projets, getProjets }) {
  return (

    
    <div>
        <ProfSideBar/>
      <div className="content-body">
        <div className="container-fluid mt-3">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">La Liste des Projets Archivés</h4>
                  <div className="active-member">
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
                          {projets && projets.map((projet) => (
                            <ProjetRow key={projet.id} projet={projet} getProjets={getProjets} />
                          ))}

                          <tr>
                            <td>Gestion Pfe</td>
                            <td>12/04/2024</td>
                            <td> <button className="btn btn-light">
            <i className="bi bi-box-arrow-down"></i> 
          </button></td>
                          </tr>
                        </tbody>
                      </table>
                      {/* Pagination */}
                      <div className="row">
                        <div className="col-12 text-center pagination-container">
                          <button className="btn btn-info ms btn-next">
                            Next
                          </button>
                          <button className="btn btn-info ms btn-previous">
                            Previous
                          </button>
                        </div>
                      </div>
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

export default ArchivedProjet;
