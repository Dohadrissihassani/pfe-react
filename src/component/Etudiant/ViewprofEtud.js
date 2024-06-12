import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import EtudeSideBar from '../../SideBar/EtudeSideBar';

function ViewprofEtud() {
    const [Etudiant, setEtudiant] = useState({
        nom: "",
        etprenom: "",
        adressEmail: "",
        codeApogee: "",
        telephone: ""
    });

    const etudiantId = 5; // Hardcode the ID to 5

    useEffect(() => {
        const loadEtudiant = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/etudiant/id/${etudiantId}`);
                setEtudiant(response.data);
            } catch (error) {
                console.error('There was an error fetching the student data:', error);
            }
        };
        console.log("The id is: ", etudiantId);
        loadEtudiant();
    }, []);

    return (
        <>
            <EtudeSideBar />
            <div className="content-body">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="read-content">
                                        <div className="media pt-5">
                                            <div className="media-body">
                                                <h5 className="m-b-3"><strong>Le nom de l'Etudiant:</strong> {Etudiant.nom}</h5>
                                                <p className="m-b-2">{Etudiant.etprenom}</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="media mb-4 mt-1"></div>
                                        <h5 className="m-b-15"><strong>Adresse mail :</strong> {Etudiant.adressEmail}</h5>
                                        <h5 className="m-b-15"><strong>Code Apogée :</strong> {Etudiant.codeApogee}</h5>
                                        <h5 className="m-b-15"><strong>Téléphone :</strong> {Etudiant.telephone}</h5>
                                        <Link to={`/ModifierCompteEtudiant/${etudiantId}`}>
                                            <button className="btn btn-info mt-3">Modifier</button>
                                        </Link>
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

export default ViewprofEtud;
