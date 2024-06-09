import React, { useState, useEffect } from 'react';
import DepartementRow from './DepartementRow';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AdminSideBar from '../../SideBar/AdminSideBar';

function Departement() {
   
  const [stateDepartement,setDepartementState ] = useState([]);

  useEffect(() => {
   getDepartement();
 }, []);

 const getDepartement = () => {
    axios
        .get("http://localhost:9090/")
        .then(response => {
            let Departement= response.data;
           setDepartementState(
              Departement.map( d=> ({
                    select : false,
                    id:d.id,
                    nom :d.nom,
                    Description :d.Description,
                    Responsable :d.Responsable

                }))
            );

         } )
            .catch(err => alert(err));
};
const sendTest= () =>{
   console.log("asdf");
}
  return (
    <div>

    <AdminSideBar/>
    
<div class="content-body">
         
         <div class="container-fluid mt-3">

             <div class="row">
                 <div class="col-lg-12">
                     <div class="card">
                         <div class="card-body">
                             <h4 class="card-title">La Liste des département</h4>
                             <div class="active-member">
                             <Link to="/creeDepartement" >
                                         <div class="row">
                                             <div class="col-7">
                                                 <div class="text-left">
                                                     <a href="creeDepartement.html"> <button >+Ajouter</button></a>
                                                     </div>
                                             </div>
                                           
                                                 
                                                
                                            
                                          </div>
                                         </Link>
                                 <div class="table-responsive">
                                     <table class="table table-xs mb-0">
                                         <thead>
                                             <tr class="tr_table  zero-configuration">
                                                
                                                 <th>département</th>
                                                 <th>Description</th>
                                                 <th>Le Responsable</th>
                                                
                                                
                                             </tr>
                                         </thead>
                                         <tbody>

                                         <DepartementRow stateDepartement={stateDepartement}   sendtest={sendTest} />
                                             
           
                                         </tbody>
                                      
                                      <tr>
                                        <td>physique</td>
                                        <td>description of department</td>
                                        <td>Ben lehmar</td>
                                      </tr>
                                     </table>
                                
                                 </div>
                             </div>
                         </div>
                     </div>                        
                 </div>
             </div>

             
         </div>
      </div>
             
 </div>
 


   


    
  )
}

export default Departement