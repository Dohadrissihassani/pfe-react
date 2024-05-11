import React from 'react';
import axios from 'axios';

function AddProjet() {


    const submit =e  => {
        let titre = e.target[0].value;
        let  dateCreation = e.target[1].value;
        let  objectif = e.target[2].value;
        
        let data = {
         titre,
         dateCreation ,
         objectif
        };
        console.log(data);
        postProjet(data);
     } ; 
   
   
   
       const postProjet =data =>{
         axios
         .post("",data)
         .then(d => {
           console.log(d);
         })
         .catch(err => alert(err));
       };





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
                 <input type="text" id="Titre" name="Titre" placeholder="Entrez le Titre du projet" required/>
                 <label for="Année">Date de création:</label>
                 <input type="date" id="Année" name="Année" placeholder="2024" required/>
                 <label for="Objectif">Objectif:</label>
                 <input type="Ojectif" id="Objectif" name="Objectif" placeholder="Entrez le Objectif du projet" required/>               
                  
                   <button type="submit">Confirmer</button>
             </form>
        </div>
                 
        </div>
    </div>
  )
}

export default AddProjet;