import React from 'react';
import { Link } from 'react-router-dom';

function ProfesseurRow({ stateProfesseur }) {
  return stateProfesseur.map(d => (
    <tr key={d.id}>
      <td>{d.nom}</td>
      <td>{d.prenom}</td>
      <td>{d.email}</td>
      <td>{d.Departement}</td>
      <td>
        <Link to={`edit/${d.id}`} id={d.id}>
          <button className="btn btn-light">
            <i className="fa-regular fa-pen-to-square"></i>
          </button>
        </Link>
      </td>
    </tr>
  ));
}

export default ProfesseurRow;