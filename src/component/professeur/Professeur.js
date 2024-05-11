import React, { useState, useEffect } from 'react';
import axios from "axios";
import ProfesseurRow from './professeur/ProfesseurRow';
import { Link } from 'react-router-dom';

function Professeur() {
       const [stateProfesseur,setProfesseurState ] = useState([]);

       useEffect(() => {
        getProfesseur();
      }, []);

      const getProfesseur =()=>{
        axios
        .get("")
        .then(data=>{
          setProfesseurState(data.data);
        }).catch(err=> alert(err));
      };
    const sendTest= () =>{
        console.log("asdf");
    }
  return (
    <div>
        <div className="content-body">
         
         <div className="container-fluid mt-3">

             <div className="row">
                 <div className="col-lg-12">
                     <div className="card">
                         <div className="card-body">
                             <h4 className="card-title">La Liste des Professeurs</h4>
                             <div className="active-member">
                                 <div className="table-responsive">
                                     <table className="table table-xs mb-0">
                                         <thead>
                                             <tr className="tr_table  zero-configuration">
                                                
                                                 <th>Le Nom</th>
                                                 <th>Le prenom</th>
                                                 <th>Email</th>
                                                 
                                                 <th>Département</th>
                                                 <th>Modifier</th>
                                             </tr>
                                         </thead>
                                         <tbody>
                                   
                                             
                                         <ProfesseurRow stateProfesseur={stateProfesseur} sendTest={sendTest} />
                                            

                                         </tbody>
                                         <Link to="/add">
                                         <div className="row">
                                             <div className="col-7">
                                                 <div className="text-left">
                                                     <a href="creeProfesseur.html"> <button >+Ajouter</button></a>
                                                     
                                             </div>
                                             </div>  
                
                                         </div>
                                         </Link>
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

export default Professeur;