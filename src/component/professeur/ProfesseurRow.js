import React from 'react';
import { Link } from 'react-router-dom';

function ProfesseurRow({ stateProfesseur }) {
  return stateProfesseur.map(d => (
    <tr key={d.id}>
      <td>{d.nom}</td>
      <td>{d.email}</td>
      <td>{d.telephone}</td>
      <td>{d.departement}</td>
      <td>
        <Link to={`edit/${d.id}`} id={d.id}>
          <button className="btn btn-light icon-btn">
            <i className="fa-regular fa-pen-to-square"></i>
          </button>
          <button className="btn btn-light icon-btn">
                            <i class="bi bi-trash"></i>
                            </button>
        </Link>
      </td>
    </tr>
  ));
}

export default ProfesseurRow;