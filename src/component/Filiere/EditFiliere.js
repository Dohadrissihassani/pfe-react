import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import AdminSideBar from '../../SideBar/AdminSideBar';
function EditFiliere(props) {
    const [stateFiliere, setstateFiliere] = useState({});
    useEffect(() => {
      let idF = props.match.params.idF;
      getFiliereById(idF);
    }, []);
    const getFiliereById = idF => {
      axios
        .get(`http://localhost:9090/Filiere/${idF}`)
        .then(d => {
          let Filiere = d.data;
          setstateFiliere({
            idF: Filiere.idF,
            nom: Filiere.name,
            Responsable: Filiere. Responsable
          });
        })
        .catch(err => alert(err));
    };
    const putFiliere = e => {
      console.log(stateFiliere);
      axios
        .put(`http://localhost:8080/customer/${stateFiliere.idF}`, stateFiliere)
        .then(d => {
          props.history.push("/");
        })
        .catch(err => alert(err));
    };


  return (
    <>
    <AdminSideBar/>
    <dev >
   <div className="container">
                <form onSubmit={e=> {e.preventDefault();
                  putFiliere(e);
                  }}
                  >
                    <h1 style={{ color: '#1E97F3', fontSize: 'large', textAlign: 'center' }}>Modifier Filière</h1>
                    <lable>Nom du Filière</lable>
                    <input
                        type="text"
                        value={stateFiliere.nom}
                        onChange={(e) => setstateFiliere({ ...stateFiliere, nom: e.target.value })}
                        placeholder="Nom du Filière"
                    />
                    <label>Description</label>
                    <input
                        type="text"
                        value={stateFiliere.description}
                        onChange={(e) => setstateFiliere({ ...stateFiliere, description: e.target.value })}
                        placeholder="Description"
                    />
                    <label>Responsable du Filière:</label>
                    <input
                        type="text"
                        value={stateFiliere.Responsable}
                        onChange={(e) => setstateFiliere({ ...stateFiliere, Responsable: e.target.value })}
                        placeholder="Responsable du Filière"
                    />
                    <button type="submit">Confirmer</button>
                </form>
            </div>
</dev>
</>
  )
}

export default EditFiliere