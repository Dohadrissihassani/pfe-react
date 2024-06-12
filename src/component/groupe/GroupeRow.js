import React from 'react';
import { Link } from 'react-router-dom';

function GroupeRow({ stateGroupe }) {
  return stateGroupe.map(d => (
    <tr key={d.id}>
      <td>{d.nom}</td>
      <td>{d.projet?.titre || 'No Project'}</td>
      //this is to see if i'm sure to put eyes button to see the project
      <td>
        <Link to={`/ViewGroup`}>
          <button className="btn btn-light icon-btn">
            <i className="fa-solid fa-eye"></i>
          </button>
  </Link>
      </td>
    </tr>
  ));
}

export default GroupeRow;
