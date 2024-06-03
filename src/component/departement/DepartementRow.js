import React from 'react'
import { Link } from 'react-router-dom';
import AdminSideBar from '../../SideBar/AdminSideBar';
function DepartementRow(props) {
  return props.stateDepartement.map(d  => (
<>
   <AdminSideBar/>
    <div>  
      <tr key={d.id} >
        <th>{d.nom}     </th>
        <td>{d.Description}</td>
        
        <td> {d.Responsable}     </td>
        
      

     </tr>



    </div>
    </>
  ));
}

export default DepartementRow