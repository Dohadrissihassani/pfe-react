import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EtudeSideBar from '../../SideBar/EtudeSideBar';

function EditGroup() {
  const [stateGroup, setStateGroup] = useState({
    id: "",
    nom: "",
    projet: {
      titre: ""
    }
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getGroupById(id);
  }, [id]);

  const getGroupById = async (id) => {
    try {
      const response = await axios.get(`http://localhost:9090/group/${id}`);
      const group = response.data;
      setStateGroup({
        id: group.id,
        nom: group.nom,
        projet: {
          titre: group.projet.titre
        }
      });
    } catch (error) {
      alert(error);
    }
  };

  const putGroup = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:9090/group/${stateGroup.id}`, stateGroup);
      navigate("/groups");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <EtudeSideBar/>
      <div className="content-body">
        <div className="container">
          <form onSubmit={putGroup}>
            <h5 style={{ color: "#1E97F3", textAlign: "center" }}>Modifier le Groupe</h5>
            <label htmlFor="nom">Nom du Groupe :</label>
            <input
              value={stateGroup.nom}
              onChange={e => setStateGroup({ ...stateGroup, nom: e.target.value })}
              type="text"
              id="nom"
              name="nom"
              placeholder="Entrez le nom du groupe"
              required
            />
            <label htmlFor="projet">Titre du Projet :</label>
            <input
              value={stateGroup.projet.titre}
              onChange={e => setStateGroup({
                ...stateGroup,
                projet: { ...stateGroup.projet, titre: e.target.value }
              })}
              type="text"
              id="projet"
              name="projet"
              placeholder="Entrez le titre du projet"
              required
            />
            <button type="submit">Confirmer</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditGroup;
