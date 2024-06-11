import React from 'react';
import axios from 'axios';
import AdminSideBar from '../../SideBar/AdminSideBar';
import { useNavigate } from "react-router-dom";

function AddDepartement(props) {


  const submit = e => {
    e.preventDefault();

    let nom = e.target[0].value;
    let  description  = e.target[1].value;
    let  responsable= e.target[2].value;

    let data = {
      nom,
      description,
      responsable
     

    };

    console.log(data);
    postDepartement(data);
  };

  const postDepartement = data => {
    axios
      .post("http://localhost:8080/departements/addDept", data)
      .then(d => {
        console.log(d);

        props.history.push('/');
      })
      .catch(err => alert(err));
  };

  return (
    <div>
      <AdminSideBar />
      <div className="container">
        <form onSubmit={submit}>
          <h1 style={{ color: '#1E97F3', fontSize: 'large', textAlign: 'center' }}>Nouveau Département</h1>
          <label>Nom du Département</label>
          <input type="text" id='nom' placeholder="DEPT-NAME" />
          <label>description</label>
          <input type="text" id='description' placeholder="Entrez la description ici" />
          <label>responsable de département:</label>
          <input type="text" id='responsable' placeholder="Entrez le responsable de département" />
          <button type="submit" className="btn btn-info">Confirmer</button>
        </form>
      </div>
    </div>
  );
}

export default AddDepartement;
