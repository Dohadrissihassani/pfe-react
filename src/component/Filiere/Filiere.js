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
            .get('http://localhost:--') // Replace -- with the correct port number
            .then(response => {
                let Filiere = response.data;
                setFiliereState(
                    Filiere.map(d => ({
                        select: false,
                        idF: d.idF, // Ensure this matches the API response field name
                        nom: d.nom,
                        Responsable: d.Responsable
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
                                                <tr className="tr_table zero-configuration">
                                                    <th>Filière</th>
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
