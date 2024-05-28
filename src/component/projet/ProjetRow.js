import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ProjetRow({ projet, getProjets }) {
  const archiveProjet = async () => {
    try {
      await axios.put(`/api/projets/${projet.id}/archive`);
      getProjets(); // Refresh the project list after archiving
    } catch (error) {
      console.error('Error archiving project:', error);
    }
  };

  const unarchiveProjet = async () => {
    try {
      await axios.put(`/api/projets/${projet.id}/unarchive`);
      getProjets(); // Refresh the project list after unarchiving
    } catch (error) {
      console.error('Error unarchiving project:', error);
    }
  };

  return (
    <tr key={projet.id}>
      <th>{projet.titre}</th>
      <td>{projet.dateCreation}</td>
      <td>
        {projet.archived ? (
          <button className="btn btn-light" onClick={unarchiveProjet}>
            <i className="bi bi-box-arrow-down"></i> 
          </button>
        ) : (
          <button className="btn btn-light" onClick={archiveProjet}>
            <i className="bi bi-box-arrow-up"></i>
          </button>
        )}
        <Link to={`/edit/${projet.id}`}>
          <button className="btn btn-light">
            <i className="fa-regular fa-pen-to-square"></i>
          </button>
        </Link>
      </td>
    </tr>
  );
}

export default ProjetRow;
