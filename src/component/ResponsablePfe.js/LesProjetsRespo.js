import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function LesProjetsRespo() {
    const [projets, setProjets] = useState([]);
    const [encadrants, setEncadrants] = useState([]);

    useEffect(() => {
        const fetchProjets = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/projets'); // Update with your backend endpoint
                setProjets(response.data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        const fetchEncadrants = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/encadrants'); // Update with your backend endpoint
                setEncadrants(response.data);
            } catch (error) {
                console.error('Error fetching encadrants:', error);
            }
        };

        fetchProjets();
        fetchEncadrants();
    }, []);

    return (
        <div className="content-body">
            <div className="container-fluid mt-3">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">La Liste des projets</h4>
                                <div className="active-member">
                                    <div className="table-responsive">
                                        <table className="table table-xs mb-0">
                                            <thead>
                                                <tr className="tr_table zero-configuration">
                                                    <th>Le Nom de projet</th>
                                                    <th>Le Nom de professeur</th>
                                                    <th>Consulter Projet</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {projets.map((projet) => (
                                                    <tr key={projet.id}>
                                                        <td>{projet.nomProjet}</td>
                                                        <td>{projet.nomEncadrant}</td>
                                                        <td>
                                                            <Link to={`/viewProjet/${projet.id}`}>
                                                                <button className="btn btn-primary">
                                                                <i class="fa-solid fa-eye"></i>
                                                                </button>
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <nav aria-label="Page navigation example" style={{ float: 'right' }}>
                                        <ul className="pagination">
                                            <li className="page-item">
                                                <a className="page-link" href="#" aria-label="Previous">
                                                    <span aria-hidden="true">&laquo;</span>
                                                    <span className="sr-only">Previous</span>
                                                </a>
                                            </li>
                                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item">
                                                <a className="page-link" href="#" aria-label="Next">
                                                    <span aria-hidden="true">&raquo;</span>
                                                    <span className="sr-only">Next</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LesProjetsRespo;
