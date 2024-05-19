import React, { useState, useEffect } from 'react';
import axios from "axios";
import ProfesseurRow from './ProfesseurRow';
import { Link } from 'react-router-dom';
import ProfSideBar from '../../SideBar/ProfSideBar';

function Professeur() {
    const [stateProfesseur, setProfesseurState] = useState([]);

    useEffect(() => {
        getProfesseur();
    }, []);

    const getProfesseur = () => {
        axios
            .get("http://localhost:9090/professeur/info")
            .then(data => {
                console.log(data);
                setProfesseurState(data.data);
            }).catch(err => alert(err));
    };
    const sendTest = () => {
        console.log("asdf");
    }
    return (
        <>
        
        <ProfSideBar/>
      
        <div>
            <div className="content-body">

                <div className="container-fluid mt-3">

                    <div className="row">

                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">La Liste des Professeurs</h4>
                                    <div className="active-member">
                                        <Link to="/addProf">
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
                                                    <tr className="tr_table  zero-configuration">

                                                        <th>Le Nom</th>
                                                        <th>Le prenom</th>
                                                        <th>Email</th>
                                                        <th>Département</th>
                                                        <th>Modfier</th>
                                                    </tr>
                                                    {/*Example of seeing hihi */}
                                                    <tr>
                                                        <td>assia</td>
                                                        <td>el bousani</td>
                                                        <td>my email</td>
                                                        <td>SMI</td>
                                                        <td><button className="btn btn-light" ><i className="fa-regular fa-pen-to-square"></i></button></td>
                                                    </tr>
                                                     {/*Example of seeing hihi */}
                                                </thead>
                                                <tbody>


                                                    <ProfesseurRow stateProfesseur={stateProfesseur} sendTest={sendTest} />


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

    )
}

export default Professeur;
