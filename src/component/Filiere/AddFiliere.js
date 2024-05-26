import React from 'react'
import axios from "axios";
import { withRouter } from "react-router-dom";
import AdminSideBar from '../../SideBar/AdminSideBar';
function AddFiliere(props) {
        const submit =e=>{
            let nom=e.target[0].value;
            let Responsable=e.target[1].value;
            let data={
                nom,
                Responsable
            };
            postFiliere(data);
        };

        const postFiliere = data => {
            axios 
            .post("http://localhost:8080",data)
            .then(d => {
                console.log(d);
                props.history.push("/")
            })
            .catch(error => alert(error));
        };
  return (
    <>
    <AdminSideBar/>
    <div className="container">
        <form 
    onSubmit={e =>{
        e.preventDefault();
        submit(e);
    }}>
    <div class="contfilière">
    
        <h1 style={{ color: '#1E97F3', fontSize: 'large', textAlign: 'center' }}>nouvelle Filière</h1>
        <label>Nom Filière</label>
        <input type="text" placeholder="nom de filière"/>
        <label>Description</label>
        <input  placeholder="Entrez la description ici"/>
        <label>Responsable:</label>
        <select>
            <option value="responsable1">Responsable 1</option>
            <option value="responsable2">Responsable 2</option>
            <option value="responsable3">Responsable 3</option>
        </select>
        <button type="submit" className="btn btn-info btn-sm">Confirmer
        </button>
    </div>
</form>
</div>
</>
  )
}

export default AddFiliere