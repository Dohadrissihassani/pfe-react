import React from 'react'
import { Link } from 'react-router-dom'
function ProjetRow() {
  return props.stateProjet.map ( d =>(
    <tr key={d.id}>
     <th> {d.titre}</th>    
     <td>{d.dateCreation}</td>
     <td>

        <button className="btn btn-light"><i className="bi bi-archive"></i></button>
        <Link to={'edit/${d.id}'} >
            <button className="btn btn-light" >
            <i className="fa-regular fa-pen-to-square"></i></button>
            </Link>
        </td>


    </tr>
  ));
}

export default ProjetRow