import React,{ useState,useEffect} from 'react';
import ProjetRow from './projet/ProjetRow';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Projet() {
    const [stateProjet,setProjetState ] = useState([]);

       useEffect(() => {
        getProjet();
      }, []);

      const getProjet =()=>{
        axios
        .get("  ")
        .then(response=>{
          let Projet =response.data
          setProjetState(
              Projet.map(d=> ({
                select: false,
                id : d.id,
                titre: d.titre,
                dateCreation: d.dateCreation
              }

              )

              )
          );

        }).catch(err=> alert(err));
      };
    const sendTest= () =>{
        console.log("asdf");
    }




  return (
    <div>
    <div className="container-fluid mt-3">

<div className="row">
    <div className="col-lg-12">
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">La Liste des Projets</h4>
                <div className="active-member">
                    <div className="table-responsive">
                        <table className="table table-xs mb-0">
                            <thead>
                                <tr className="tr_table  zero-configuration">
                                    <th>Nom de projet</th>
                                    <th>Date de Création </th>
                                    <th>Archivé et Modifier le projet </th>
                                </tr>
                            </thead>
                            <tbody>
                                
                             <ProjetRow stateProjet={stateProjet} sendTest={sendTest} />

                               
                            </tbody>
                            <Link to="/add/projet">
                            <div className="row">
                                <div className="col-7">
                                     <div className="text-left">
                                        <a href="créerProjet.html"> <button >+Ajouter</button></a>
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


    
  )
}

export default Projet