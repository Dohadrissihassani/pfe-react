import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AdminSideBar from '../../SideBar/AdminSideBar';
function EditProfByAdmin() {
 
  const [stateProf, setStateProf] = useState({
    id: "",
    name: "",
    email: "",
    telephone: "",
    departement: "",
    password: ""
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProfesseurById(id);
  }, [id]);

  const getProfesseurById = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8080/professeur/${id}`);
      const professeur = response.data;
      setStateProf({
        id: professeur.id,
        name: professeur.name,
        email: professeur.email,
        telephone: professeur.telephone,
        departement: professeur.departement,
        password: professeur.password
      });
    } catch (error) {
      alert(error);
    }
  };

  const putProfesseur = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/professeur/${stateProf.id}`, stateProf);
      navigate("/");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <AdminSideBar/>
      <div className="content-body">
        <div className="container">
          <form onSubmit={putProfesseur}>
            <h5 style={{ color: "#1E97F3", textAlign: "center"}}>  Modifie Compte</h5>
            <label htmlFor="nom">Nom et Prénom :</label>
            <input
              value={stateProf.name}
              onChange={e => setStateProf({ ...stateProf, name: e.target.value })}
              type="text"
              id="nom"
              name="nom"
              placeholder="Entrez le nom et le prénom"
              required
            />
            <label htmlFor="email">Adresse e-mail :</label>
            <input
              value={stateProf.email}
              onChange={e => setStateProf({ ...stateProf, email: e.target.value })}
              type="email"
              id="email"
              name="email"
              placeholder="Entrez l'adresse e-mail"
              required
            />
            <label htmlFor="tel">Téléphone :</label>
            <input
              value={stateProf.telephone}
              onChange={e => setStateProf({ ...stateProf, telephone: e.target.value })}
              type="tel"
              id="tel"
              name="tel"
              placeholder="Entrez le numéro de téléphone"
              required
            />
            <label htmlFor="departement">Département :</label>
            <select
              value={stateProf.departement}
              onChange={e => setStateProf({ ...stateProf, departement: e.target.value })}
              id="departement"
              name="departement"
            >
              <option value="DEPARTMENT_INFO">DEPARTMENT_INFO</option>
              <option value="DEPARTMENT_PHYSIQUE">DEPARTMENT_PHYSIQUE</option>
            </select>
            <label htmlFor="password">Mot de passe :</label>
            <input
              value={stateProf.password}
              onChange={e => setStateProf({ ...stateProf, password: e.target.value })}
              type="password"
              id="password"
              name="password"
              placeholder="Entrez votre mot de passe"
              required
            />
            <button type="submit">Confirmer</button>
          </form>
        </div>
      </div>
   


</>
  );
}

export default EditProfByAdmin