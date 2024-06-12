import React from 'react'
import { Link } from 'react-router-dom';
import AdminSideBar from '../../SideBar/AdminSideBar';
function DepartementRow(props) {
  return props.stateDepartement.map(d  => (
<>
  
   
      <tr key={d.id} >
        <td>{d.nom}     </td>
        <td>{d.description}</td>
        
        <td> {d.responsable}  </td>
        <td>
                <Link to={'#'} className="btn btn-sm btn-light">
                    <i className="fa fa-pen-to-square"></i>
                </Link>
              
          <button className="btn btn-light icon-btn">
                            <i class="bi bi-trash"></i>
                            </button>
            </td>
     </tr>



  
    </>
  ));
}

export default DepartementRow