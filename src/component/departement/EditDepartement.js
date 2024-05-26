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
            .get('YOUR_API_ENDPOINT/' + id) // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
            .then((response) => {
                const departement = response.data;
                setStateDept({
                    id: departement.id,
                    name: departement.name,
                    Description: departement.Description,
                    Responsable: departement.Responsable
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
            .put('YOUR_API_ENDPOINT/' + stateDept.id, stateDept) // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
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
                        value={stateDept.name}
                        onChange={(e) => setStateDept({ ...stateDept, name: e.target.value })}
                        placeholder="Nom du Département"
                    />
                    <h2>Description</h2>
                    <input
                        type="text"
                        value={stateDept.Description}
                        onChange={(e) => setStateDept({ ...stateDept, Description: e.target.value })}
                        placeholder="Description"
                    />
                    <h2>Responsable du département:</h2>
                    <input
                        type="text"
                        value={stateDept.Responsable}
                        onChange={(e) => setStateDept({ ...stateDept, Responsable: e.target.value })}
                        placeholder="Responsable du département"
                    />
                    <button type="submit">Confirmer</button>
                </form>
            </div>
        </div>
    );
}

export default EditDepartement;
