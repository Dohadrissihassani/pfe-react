import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import EtudeSideBar from '../../SideBar/EtudeSideBar';

function ViewprofEtud() {

    const [Etudiant, setEtudiant] = useState({
        name: "",
        departement: "",
        email: "",
        codeApogee: "",
        telephone: ""
    });

    const { id } = useParams();

    useEffect(() => {
        const loadEtudiant = async () => {
            try {
                const result = await axios.get(`http://example.com/api/etudiants/${id}`); // Update with the correct API endpoint
                setEtudiant(result.data);
            } catch (error) {
                console.error('There was an error fetching the student data:', error);
            }
        };

        console.log("The id is: ", id);
        loadEtudiant();
    }, [id]);

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
                                       
                                            <h5 className="m-b-3">Le nom de l'Etudiant: {Etudiant.name}</h5>
                                            <p className="m-b-2">{Etudiant.departement}</p>
                                        </div>
                                    </div>
                                    <h5 className="m-b-15"><strong>Adresse mail :</strong> {Etudiant.email}</h5>
                                    <h5 className="m-b-15"><strong>Code Apogée :</strong> {Etudiant.codeApogee}</h5>
                                    <h5 className="m-b-15"><strong>Téléphone :</strong>{Etudiant.telephone}</h5>
                                    <Link to={`/ModifierCompteEtud/${id}`}>
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
