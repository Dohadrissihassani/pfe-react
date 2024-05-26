import React from 'react'
import AdminSideBar from '../../SideBar/AdminSideBar';
function FiliereRow(props) {

    return props.stateFiliere.map(d => (
        <>
<AdminSideBar/>
        <div>
            <tr key={d.idF} >
                <th>{d.nom}  </th>
                <td> {d.Responsable}     </td>

                <td>
                    <link to={'edit/${d.idF}'}>
                        <button class="btn btn-light" ><i class="fa-regular fa-pen-to-square"></i></button>
                    </link>
                </td>

            </tr>



        </div>
</>
    ));
}


export default FiliereRow;