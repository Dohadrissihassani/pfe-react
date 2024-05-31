import axios from 'axios';
import React, { useEffect, useState } from 'react'
import EtudeSideBar from '../../SideBar/EtudeSideBar';

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
  <>
  <EtudeSideBar/>
    <div className="content-body">
         
    <div className="container" style="margin-left:auto;margin-right: auto;">
         <h4>Créer votre compte</h4>
        <htmlhtmlFor method="get"
        onSumbit = { e=>{
            e.preventDefault();
            putEtudiant(e) ;
        } }>
            <label htmlFor="nom"> Prénom :</label>
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

            <label htmlFor="nom">Nom :</label>
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

            <label htmlFor="email">Adresse e-mail :</label>
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
            <label htmlFor="nom">Code Apogée:</label>
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
            

            <label htmlFor="tel">Téléphone :</label>
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
            <label htmlFor="Filière ">Filière  :</label>
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

            <label htmlFor="password">Mot de passe :</label>
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
        </htmlhtmlFor>
    </div>
            
</div>
<EtudeSideBar/>
</>
  )
}

export default EditCompEtudiant