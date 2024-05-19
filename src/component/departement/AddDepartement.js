import React from 'react'
import axios from 'axios';
import { withRouter } from "react-router-dom";
function AddDepartement() {


      const submit =e  => {

      let  name = e.targer[0].value;
      let  Responsable = e.targer[1].value;
      
      let data ={
         name,
         Responsable
      }
      console.log(data);
      postDepartement(data);
      }
      const postDepartement =data =>{
        axios
        .post("",data)
        .then(d => {
          console.log(d);
        })
        .catch(err => alert(err));
      };

  return (
    <div>
        
        <div class="container">
           <htmlForm method="get" onSubmit={
            e =>{
                e.preventDefault();
                submit(e);
            } } >
            <h1 style="color:#1E97F3 ; font-size: large; text-align: center;">Nouveau Département </h1>
           <h2>Nom du Département</h2>
           <input type="text" id='name ' placeholder="DEPT-NAME"/>
           <h2>Description</h2>
           <input type="text" id='name ' placeholder="Entrez la Description ici"/>
           <h2>Responsable de  département:</h2>
           <input type="text" id='Responsqble' placeholder=" Entrez le Responsable de  département:"/>

           <button>Confirmer</button>
           </htmlForm>
         </div>
        
        </div>
  );
}

export default withRouter(AddDepartement);