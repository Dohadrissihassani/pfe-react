import axios from 'axios';
import React from 'react'

function AddProfesser() {
  const submit =e  => {
     let name = e.target[0].value;
     let email = e.target[1].value;
     let telephone = e.target[2].value;
     let departement =e. target[3].value;
     let password =e. target[3].value;
     let data = {
      name,
      email,
      telephone,
      departement,
      password
     };
     console.log(data);
     postProfesseur(data);
  } ; 



    const postProfesseur =data =>{
      axios
      .post("",data)
      .then(d => {
        console.log(d);
      })
      .catch(err => alert(err));
    };
  return (
    <div>
         <div className="content-body">
         
          <div className="container" >
              <form method="get" onSubmit={
                e =>{
                  e.preventDefaultl();
                  submit(e);
                } }>
                 <h4 style="color:#1E97F3;">Créer un Compte</h4>
                 <label for="nom">Nom et Prénom :</label>
                 <input type="text" id="nom" name="nom" placeholder="Entrez le nom et le prénom" required />
     
                 <label for="email">Adresse e-mail :</label>
                 <input type="email" id="email" name="email" placeholder="Entrez l'adresse e-mail" required/>
     
                 
     
                 <label for="tel">Téléphone :</label>
                 <input type="tel" id="tel" name="tel" placeholder="Entrez le numéro de téléphone" required/>
     
                 <label for="departement">Département :</label>
                 <select id="departement" name="departement">
                     <option value="DEPARTMENT_INFO">DEPARTMENT_INFO</option>
                     <option value="DEPARTMENT_INFO">DEPARTMENT_PHYSIQUE</option>
                   
                 </select>
     
                 <label for="password">Mot de passe :</label>
                 <input type="password" id="password" name="password" placeholder="Entrez votre mot de passe" required/>
                 
                 <button type="submit">Confirmer</button>
             </form>
           </div>
                 
        </div>
    </div>
  );
}

export default AddProfesser;