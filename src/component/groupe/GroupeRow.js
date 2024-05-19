import React from 'react';
import { Link } from 'react-router-dom';

function GroupeRow({ stateGroupe }) {
  return stateGroupe.map(d => (
    <tr key={d.id}>
      <td>{d.nom}</td>
      <td>{d.projet?.titre || 'No Project'}</td>
      <td>
        <Link to={`/edit/${d.id}`}>
          <button className="btn btn-light">
            <i className="fa-solid fa-eye"></i>
          </button>
        </Link>
      </td>
    </tr>
  ));
}

export default GroupeRow;
