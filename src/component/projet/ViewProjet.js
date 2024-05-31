import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ViewProjet() {
    const [Projet, setProjet] = useState({
        Titre: "",
        description: "",
        dateCreation: ""
    });

    const { id } = useParams();

    useEffect(() => {
        const loadProjet = async () => {
            try {
                const result = await axios.get(`http://localhost:8080/projets/${id}`);
                setProjet(result.data);
            } catch (error) {
                console.error('There was an error fetching the project data:', error);
            }
        };

        console.log("The id is: ", id);
        loadProjet();
    }, [id]);

    return (
        <div className="content-body">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <h2>Titre:</h2>
                                <textarea>{Projet.Titre}</textarea>
                                <h2>Description:</h2>
                                <textarea>{Projet.description}</textarea>
                                <h5>Date de création:</h5>
                                <p>{Projet.dateCreation}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewProjet;
