import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import AdminSideBar from '../../SideBar/AdminSideBar';

function EditFiliere() {
  let navigate = useNavigate();
  const { idF } = useParams();

  const [stateFiliere, setstateFiliere] = useState({
    nom: "",
    responsable: "",
    description: ""
  });

  const { nom, responsable, description } = stateFiliere;

  const onInputChange = (e) => {
    setstateFiliere({ ...stateFiliere, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadFiliere();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/filieres/filiere/${idF}`, stateFiliere);
    navigate("/");
  };

  const loadFiliere = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/filieres/filiere/${idF}`);
      console.log('Loaded filiere:', result.data);  // Debugging line
      setstateFiliere(result.data);
    } catch (error) {
      console.error('Error loading filiere:', error);
    }
  };

  return (
    <>
      <AdminSideBar />
      <div className="container">
        <form onSubmit={onSubmit}>
          <h1 style={{ color: '#1E97F3', fontSize: 'large', textAlign: 'center' }}>Modifier Filière</h1>
          <label htmlFor="nom">Nom du Filière</label>
          <input
            type="text"
            name="nom"
            value={nom}
            onChange={onInputChange}
            placeholder="Nom du Filière"
          />
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={onInputChange}
            placeholder="Description"
          />
          <label htmlFor="responsable">Responsable du Filière:</label>
          <input
            type="text"
            name="responsable"
            value={responsable}
            onChange={onInputChange}
            placeholder="Responsable du Filière"
          />
          <button type="submit">Confirmer</button>
          <Link className="btn btn-outline-danger mx-2" to="/Liste-Filiere">
            Annuler
          </Link>
        </form>
      </div>
    </>
  );
}

export default EditFiliere;
