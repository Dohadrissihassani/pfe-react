import React from 'react';
import axios from 'axios';
import AdminSideBar from '../../SideBar/AdminSideBar';
import { useNavigate } from "react-router-dom";

function AddDepartement() {
  const navigate = useNavigate();

  const submit = e => {
    e.preventDefault();

    let name = e.target[0].value;
    let Responsable = e.target[1].value;

    let data = {
      name,
      Responsable
    };
    
    console.log(data);
    postDepartement(data);
  }

  const postDepartement = data => {
    axios
      .post("", data)
      .then(d => {
        console.log(d);
        // navigate to a different route if needed
        navigate('/some-route');
      })
      .catch(err => alert(err));
  };

  return (
    <div>
      <AdminSideBar />
      <div className="container">
        <form method="get" onSubmit={submit}>
          <h1 style={{color: '#1E97F3', fontSize: 'large', textAlign: 'center'}}>Nouveau Département</h1>
          <label>Nom du Département</label>
          <input type="text" id='name' placeholder="DEPT-NAME" />
          <label>Description</label>
          <input type="text" id='description' placeholder="Entrez la Description ici" />
          <label>Responsable de département:</label>
          <input type="text" id='Responsable' placeholder="Entrez le Responsable de département" />
          <button>Confirmer</button>
        </form>
      </div>
    </div>
  );
}

export default AddDepartement;
