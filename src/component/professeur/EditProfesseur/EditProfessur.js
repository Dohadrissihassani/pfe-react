import axios from 'axios';
import React, { useEffect , useState } from 'react'
import {withRouter} from "react-router-dom";

function EditProfessur(props) {
    const [ stateProf , setstateProf]= useState ({});


  useEffect (() => {
    let id =props.mqtch.params.id;
    getProfesseurById(id);
  },  []);
   
   const getProfesseurById = id => {
    axios
    .get('  ')
    .then (d => {
      let professeur = d.data;
     
      setstateProf ({
       name: professeur.name,
        email: professeur.email,
         telephone : professeur.telephone,
         departement: professeur.departement,
         password: professeur.password
         });
        

     })
     .catch( err => alert(err) );
   };

  return (
    <div>
     <div className="content-body">
         
         <div className="container" >
             <form method="get" onSubmit={
               e =>{
                 e.preventDefault();
                 submit(e);
               } }>
                <h4 style="color:#1E97F3;">Créer un Compte</h4>
                <label for="nom">Nom et Prénom :</label>
                <input  value={stateProf.name}
                         onChange={e => {
                           let value = e.target.value ;
                           setstateProf ({ name : value});
                          }}
                 type="text"   id="nom" name="nom" placeholder="Entrez le nom et le prénom" required />
    
                <label for="email">Adresse e-mail :</label>
                <input  value={stateProf.email}
                 onChange={e => {
                    let value = e.target.value ;
                    setstateProf ({ email : value});
                   }}
                 type="email"  id="email" name="email" placeholder="Entrez l'adresse e-mail" required/>
    
                
    
                <label for="tel">Téléphone :</label>
                <input value={stateProf.telephone}
                  onChange={e => {
                    let value = e.target.value ;
                    setstateProf ({ telephone: value});
                   }}
                 type="tel" id="tel" name="tel" placeholder="Entrez le numéro de téléphone" required/>
    
                <label for="departement">Département :</label>
                <select value={stateProf.departement}
                  onChange={e => {
                    let value = e.target.value ;
                    setstateProf ({ departement : value});
                   }}
                 id="departement" name="departement">
                    <option value="DEPARTMENT_INFO">DEPARTMENT_INFO</option>
                    <option value="DEPARTMENT_INFO">DEPARTMENT_PHYSIQUE</option>
                  
                </select>
    
                <label for="password">Mot de passe :</label>
                <input value={stateProf.password}
                 onChange={e => {
                    let value = e.target.value ;
                    setstateProf ({  password: value});
                   }}
                 type="password"  id="password" name="password" placeholder="Entrez votre mot de passe" required/>
                
                <button type="submit">Confirmer</button>
            </form>
          </div>
                
       </div>



    </div>
  )
} 

export default  withRouter(EditProfessur);