import React from 'react';
import axios from 'axios';
import AdminSideBar from '../../SideBar/AdminSideBar';

function AddFiliere(props) {
    const submit = e => {
        e.preventDefault();
        let nom = e.target[0].value;
        let description = e.target[1].value; 
        let responsable = e.target[2].value;
        let data = {
            nom,
            description,
            responsable
        };
        postFiliere(data);
    };

    const postFiliere = data => {
        axios
            .post('http://localhost:8080/filieres/filiere', data)
            .then(d => {
                console.log(d);
                props.history.push('/');
            })
            .catch(error => alert(error));
    };

    return (
        <>
            <AdminSideBar/>
            <div className="container">
                <form onSubmit={submit}>
                    <div className="contfilière">
                        <h1 style={{ color: '#1E97F3', fontSize: 'large', textAlign: 'center' }}>Nouvelle Filière</h1>
                        <label>Nom Filière</label>
                        <input type="text" id='nom' placeholder="Nom de filière"/>
                        <label>Description</label>
                        <input type="text" id='description' placeholder="Entrez la description ici"/>
                        <label>Responsable</label>
                        <input type="text" id='responsable' placeholder="Responsable"/>
                        <button type="submit" className="btn btn-info ">Confirmer</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default AddFiliere;
