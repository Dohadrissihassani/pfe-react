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
     </tr>



  
    </>
  ));
}

export default DepartementRow