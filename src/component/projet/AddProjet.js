import React from 'react';
import axios from 'axios';
import ProfSideBar from '../../SideBar/ProfSideBar';

function AddProjet(props) {


    const submit =e  => {
        let titre = e.target[0].value;
        let  dateCreation = e.target[1].value;
        let  objectif = e.target[2].value;
        
        let data = {
         titre,
         dateCreation ,
         objectif
        };
       
        postProjet(data);
     } ; 
   
   
   
       const postProjet =data =>{
         axios
         .post("http://localhost:8080/Projets/add", data)
         .then(d => {
           console.log(d);
           props.history.push("/ListeProjet");
         })
         .catch(err => alert(err));
       };





  return (
    <div>


  <ProfSideBar/>
        <div class="content-body">
        
         <div class="container" >
        
              <h4>Créer un projet</h4>
             <htmlForm method="get" onSubmit={
               e =>{
                e.preventDefault();
                    submit(e);
                    }} >
                 <label htmlFor="Titre">Titre:</label>
                 <input type="text" id="Titre" name="Titre" placeholder="Entrez le Titre du projet" required/>
                 <label htmlFor="Année">Date de création:</label>
                 <input type="date" id="Année" name="Année" placeholder="2024" required/>
                 <label htmlFor="Objectif">Objectif:</label>
                 <input type="Ojectif" id="Objectif" name="Objectif" placeholder="Entrez le Objectif du projet" required/>               
                  
                   <button type="submit">Confirmer</button>
             </htmlForm>
        </div>
                 
        </div>
    </div>
  )
}

export default AddProjet;