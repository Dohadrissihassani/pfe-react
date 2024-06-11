import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AdminSideBar from '../../SideBar/AdminSideBar';
import { useNavigate } from "react-router-dom";

function AddProfesser(props) {
  const [departments, setDepartments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    try {
      const response = await axios.get('http://localhost:8080/departements/getdept/all');
      setDepartments(response.data);
    } catch (error) {
      console.error("There was an error fetching the department data!", error);
    }
  };

  const submit = (e) => {
    e.preventDefault();

let nom = e.strget[0].value;
let email = e.target[1].value;
let password=e.target[2].value;
let telephone=e.target[3].value;
let departement =e.target[4].value
let data={
  nom,
  email,
  password,
  telephone,
  departement

}

    console.log(data);
    postProfesseur(data);
  };

  const postProfesseur = (data) => {
    axios.post("http://localhost:8080/professeur/save", data)
      .then(d => {
        console.log(d);
        props.history.push('/');
      })
      .catch(err => {
      
        alert(`Error: ${err.response.status} - ${err.response.data.message}`);
      });
  };

  return (
    <>
      <AdminSideBar />
      <div className="container">
        <form onSubmit={submit}>
          <h4 style={{ color: "#1E97F3" }}>Créer un Compte Professeur</h4>
          <label htmlFor="nom">Nom et Prénom :</label>
          <input type="text" id="nom" name="nom" placeholder="Entrez le nom et le prénom" required />

          <label htmlFor="email">Adresse e-mail :</label>
          <input type="email" id="email" name="email" placeholder="Entrez l'adresse e-mail" required />

          <label htmlFor="tel">Téléphone :</label>
          <input type="tel" id="tel" name="telephone" placeholder="Entrez le numéro de téléphone" required />

          <label htmlFor="departement">Département :</label>
          <select id="departement" name="departement" required>
            {departments.map((dept) => (
              <option key={dept.id} value={dept.id}>{dept.nom}</option>
            ))}
          </select>

          <label htmlFor="password">Mot de passe :</label>
          <input type="password" id="password" name="password" placeholder="Entrez votre mot de passe" required />

          <button type="submit">Confirmer</button>
        </form>
      </div>
    </>
  );
}

export default AddProfesser;
