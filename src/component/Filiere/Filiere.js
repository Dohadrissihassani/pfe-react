// Filiere.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FiliereRow from './FiliereRow';
import { Link } from 'react-router-dom';
import AdminSideBar from '../../SideBar/AdminSideBar';

function Filiere() {
    const [stateFiliere, setFiliereState] = useState([]);

    useEffect(() => {
        getFiliere();
    }, []);

    const getFiliere = () => {
        axios
            .get('http://localhost:8080/filieres/list') 
            .then(response => {
                let Filiere = response.data;
                setFiliereState(
                    Filiere.map(d => ({
                        select: false,
                        idF: d.idF, 
                        nom: d.nom, // Corrected here
                        responsable: d.responsable,
                        description: d.description
                    }))
                );
            })
            .catch(err => alert(err));
    };

    return (
        <>
        <AdminSideBar/>
        <div className="content-body">
            <div className="container-fluid mt-3">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">La Liste des Filières</h3>
                                <div className="active-member">
                                    <Link to="/addFiliere">
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
                                                <tr className="tr_table zero-configuration" style={{color:"black"}}>
                                                    <th>Filière</th>
                                                    <th>Description</th>
                                                    <th>Responsable</th>
                                                    <th>Operation</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <FiliereRow
                                                    stateFiliere={stateFiliere}
                                                    setFiliereState={setFiliereState}
                                                />
                                               
                                        
                                            </tbody>
                                        </table>
                                        {/*Pagination */}
                                      
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

export default Filiere;