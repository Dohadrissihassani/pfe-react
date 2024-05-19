import React from 'react'
import { Link } from 'react-router-dom';

function GroupeRow() {
  return props.stateGroupe.map(d => (
    
         <tr key={d.id} >


              <td>{d.nom}</td>
                <td>{d.titre}</td>
                <td>
                   <Link to={'ConsulterGroupe'}>
                   <button className="btn btn-light" >
                    <i class="fa-solid fa-eye"></i></button>
                  </Link>   
                </td>
                

         </tr>
    
  ));
}

export default GroupeRow;