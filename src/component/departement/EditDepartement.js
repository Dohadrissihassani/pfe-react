import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AdminSideBar from '../../SideBar/AdminSideBar';

function EditDepartement(props) {
    const [stateDept, setStateDept] = useState({});

    useEffect(() => {
        let id = props.match.params.id;
        getDepartementBy(id);
    }, []);

    const getDepartementBy = (id) => {
        axios
            .get(`http://localhost:8080/departements/dept/${id}` + id) // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
            .then((response) => {
                const departement = response.data;
                setStateDept({
                    id: departement.id,
                    nom: departement.nom,
                    description: departement.description,
                    responsable: departement.responsable
                });
            })
            .catch((error) => {
                console.error('Error fetching department:', error);
                alert('Error fetching department:', error);
            });
    };

    const putDepartement = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:8080/departements/updateDept/${stateDept.id}` + stateDept.id, stateDept) // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
            .then((response) => {
                props.history.push("/"); // Fixed typo: 'push' instead of 'puch'
            })
            .catch((error) => {
                console.error('Error updating department:', error);
                alert('Error updating department:', error);
            });
    };

    return (
        <div>
            <AdminSideBar />

            <div className="container">
                <form onSubmit={putDepartement}>
                    <h1 style={{ color: '#1E97F3', fontSize: 'large', textAlign: 'center' }}>Modifier Département</h1>
                    <h2>Nom du Département</h2>
                    <input
                        type="text"
                        value={stateDept.nom}
                        onChange={(e) => setStateDept({ ...stateDept, nom: e.target.value })}
                        placeholder="Nom du Département"
                    />
                    <h2>description</h2>
                    <input
                        type="text"
                        value={stateDept.description}
                        onChange={(e) => setStateDept({ ...stateDept, description: e.target.value })}
                        placeholder="description"
                    />
                    <h2>responsable du département:</h2>
                    <input
                        type="text"
                        value={stateDept.responsable}
                        onChange={(e) => setStateDept({ ...stateDept, responsable: e.target.value })}
                        placeholder="responsable du département"
                    />
                    <button type="submit">Confirmer</button>
                </form>
            </div>
        </div>
    );
}

export default EditDepartement;
