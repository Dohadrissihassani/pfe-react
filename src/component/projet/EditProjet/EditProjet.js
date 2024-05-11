import axios from 'axios';
import React, { useEffect, useState} from 'react';
import {withRouter} from "react-router-dom";
function EditProjet() {
    
    const [ stateProj , setstateProj]= useState ({});


    useEffect (() => {
      let id =props.mqtch.params.id;
       getProjetById(id);
    },  []);
     
     const getProjetById = id => {
      axios
      .get('  ')
      .then (d => {
        let projet = d.data;
       
        setstateProj ({
          id:projet.id,
          titre: projet.titre,
          objectif: projet. objectif,
          dateCreation: projet.dateCreation
          
           });
          
   
       })
       .catch( err => alert(err) );
     };
     
     const putProjet = (e) => {
      console.log(setstateProj);
      axios
      .put('    ',setstateProj)
      .then(d => {
          props.history.puch("/");
      })
      .catch(err => alert(err));
     } ;





  return (
    <div>

        
      <div class="content-body">
         
         <div class="container" >
              <h4>Créer un projet</h4>
             <form method="get" onSubmit={
               e =>{
                e.preventDefault();
                    submit(e);
                    }} >
                 <label for="Titre">Titre:</label>
                 <input value={stateProj.titre}
                         onChange={e => {
                       let value = e.target.value ;
                          setstateProj ({ 
                         titre: value,
                         id:stateProj.id,
                         objectif :stateProj.objectif,
                         dateCreation:stateProj.dateCreation
                        
                         });
                        }}

                 
                 type="text" id="Titre" name="Titre" placeholder="Entrez le Titre du projet" required/>
                 <label for="Année">Date de création:</label>
                 <input value={stateProj.dateCreation}
                         onChange={e => {
                       let value = e.target.value ;
                          setstateProj ({ 
                            dateCreation : value,
                            titre: projet.titre,
                            id:stateProj.id,
                           objectif :stateProj.objectif
                        
                        
                         });
                        }}

                 type="date" id="Année" name="Année" placeholder="2024" required/>
                 <label for="Objectif">Objectif:</label>
                 <input value={stateProj.objectif}
                         onChange={e => {
                       let value = e.target.value ;
                          setstateProj ({ 
                            objectif : value,
                            titre: projet.titre,
                            id:stateProj.id,
                           dateCreation :stateProj.dateCreation
                        
                        
                         });
                        }}
                 type="Ojectif" id="Objectif" name="Objectif" placeholder="Entrez le Objectif du projet" required/>               
                  
                   <button type="submit">Confirmer</button>
             </form>
        </div>
                 
        </div>
    </div>
  )
}

export default withRouter(EditProjet);