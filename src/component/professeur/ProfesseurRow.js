import React from 'react'
import { Link } from 'react-router-dom';

function ProfesseurRow(props) {
  return props.stateProfesseur.map(d => (
        <tr key={d.id}>
      
        <th>{d.nom}</th>
        <th>{d.prenom}</th>
        <th>{d.email}</th>
        <th>{d.Departement}</th>
        <td>
            <Link to={'edit/${d.id}'} >
            <button className="btn btn-light" >
            <i className="fa-regular fa-pen-to-square"></i></button>
            </Link>
            </td>
       </tr>
       ));
   
  
}

export default ProfesseurRow;