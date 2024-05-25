import axios from 'axios';
import React, { useEffect, useState } from 'react'

function EditCompEtudiant(props) {

const[ stateEtud , setstateEtud]= useState ({});


 useEffect ( () =>{
    let id =props.match.params.id;
    getEtudiantById(id);
  },  []);
   
  const getEtudiantById = id =>{
   axios
   .get( ' ')
    .then (d => {
       let etudiant = d.data;

       setstateEtud({
         id:etudiant.id,
         prénom : etudiant.prenom,
         nom:etudiant. nom,
         adresseEmail:  etudiant.adressEmail,
         codeApogee:  etudiant.codeApogee,
         telephone: etudiant. telephone,
         filière : etudiant.filiere,
         motdepasse:etudiant.motdepasse
    });

  })
   .catch(err =>alert(err));
  };

    const putEtudiant =( e)=>{
        console.log(setstateEtud);
        axios
        .put('   '.setstateEtud)
        .then ( d=> {
            props.history.puch("/");
        })
        .catch (err=> alert(err));
    }


  return (
  
    <div class="content-body">
         
    <div class="container" style="margin-left:auto;margin-right: auto;">
         <h4>Créer votre compte</h4>
        <htmlFor method="get"
        onSumbit = { e=>{
            e.preventDefault();
            putEtudiant(e) ;
        } }>
            <label for="nom"> Prénom :</label>
            <input value= { stateEtud.prenom}
            onChange={e =>{
                let value = e.target.value;
                setstateEtud ({
                    prenom :value,
                    id: stateEtud.id,
                    nom :stateEtud.nom,
                    adressEmail:stateEtud.adressEmail,
                    codeApogee: stateEtud.codeApogee,

                      telephone: stateEtud.telephone,
                      filiere:stateEtud.filiere,
                     motdepasse: stateEtud.motdepasse

                });
            }}
            type="text" id="prenom" name="prenom" placeholder="Entrez le prénom" required/>

            <label for="nom">Nom :</label>
            <input value={stateEtud.nom}
                onChange={e =>{
                    let value = e.target.value;
                    setstateEtud ({
                        prenom :stateEtud.prenom,
                        id: stateEtud.id,
                        nom :value,
                        adressEmail:stateEtud.adressEmail,
                        codeApogee: stateEtud.codeApogee,
                        telephone: stateEtud.telephone,
                        filiere:stateEtud.filiere,
                         motdepasse: stateEtud.motdepasse
    
                    });
                }}

            type="text" id="nom" name="nom" placeholder="Entrez le nom " required/>

            <label for="email">Adresse e-mail :</label>
            <input value={stateEtud.adressEmail}
                onChange={e =>{
                    let value = e.target.value;
                    setstateEtud ({
                        prenom :stateEtud.prenom,
                        id: stateEtud.id,
                        nom :stateEtud.nom,
                        adressEmail:value,
                        codeApogee: stateEtud.codeApogee,
                        telephone: stateEtud.telephone,
                        filiere:stateEtud.filiere,
                         motdepasse: stateEtud.motdepasse
                        });
                    }}
    
             type="email" id="email" name="Code Apogée" placeholder="Entrez l'adresse e-mail" required/>
            <label for="nom">Code Apogée:</label>
            <input type="text" value={stateEtud.codeApogee}
            onChange={e =>{
                let value = e.target.value;
                setstateEtud ({
                    prenom :stateEtud.prenom,
                    id: stateEtud.id,
                    nom :stateEtud.nom,
                    adressEmail:stateEtud.adressEmail,
                    codeApogee: value,
                    telephone: stateEtud.telephone,
                    filiere:stateEtud.filiere,
                     motdepasse: stateEtud.motdepasse
                    });
                }}
             id="Code Apogée" name="Code Apogée"  placeholder="Entrez le code Apogée" required/>
            

            <label for="tel">Téléphone :</label>
            <input  value={stateEtud.telephone}
            onChange={e =>{
                let value = e.target.value;
                setstateEtud ({
                    prenom :stateEtud.prenom,
                    id: stateEtud.id,
                    nom :stateEtud.nom,
                    adressEmail:stateEtud.adressEmail,
                    codeApogee: stateEtud.codeApogee,
                    telephone: value,
                    filiere:stateEtud.filiere,
                     motdepasse: stateEtud.motdepasse
                    });
                }}
              type="tel" id="tel" name="tel" placeholder="Entrez le numéro de téléphone" required/>
            <label for="Filière ">Filière  :</label>
            <select   value={stateEtud.filiere}
            onChange={e =>{
                let value = e.target.value;
                setstateEtud ({
                    prenom :stateEtud.prenom,
                    id: stateEtud.id,
                    nom :stateEtud.nom,
                    adressEmail:stateEtud.adressEmail,
                    codeApogee: stateEtud.codeApogee,
                    telephone: stateEtud.telephone,
                    filiere:value,
                     motdepasse: stateEtud.motdepasse
                    });
                }}

            id="Filière " name="Filière ">
                <option value="SMI">SMI</option>
                <option value="SMA">SMA</option>
                <option value="SMC">SMC</option>
                <option value="SMP">SMP</option>
                <option value="SMP">STU</option>
                <option value="SMP">SVI</option>

             
            </select> 

            <label for="password">Mot de passe :</label>
            <input   value={stateEtud.motdepasse}
            onChange={e =>{
                let value = e.target.value;
                setstateEtud ({
                    prenom :stateEtud.prenom,
                    id: stateEtud.id,
                    nom :stateEtud.nom,
                    adressEmail:stateEtud.adressEmail,
                    codeApogee: stateEtud.codeApogee,
                    telephone: stateEtud.telephone,
                    filiere:stateEtud.filiere,
                     motdepasse: value
                    });
                }}

             type="password" id="password" name="password" placeholder="Entrez votre mot de passe" required/>
            
            <button type="submit">Confirmer</button>
        </htmlFor>
    </div>
            
</div>
  )
}

export default EditCompEtudiant