import axios from 'axios';
import React, { useEffect, useState } from 'react';

function EditDepartement(props) {
    const [ stateDept , setstateDept]= useState ({});


    useEffect ( () =>{
        let id = props.match.params.id;
        getDepartementBy(id);

    },[] );
   
    const getDepartementBy =id => {
        axios 
        .get ( '  ')
        .then ( d=> {
            let departement =d.data;

            setstateDept({
            id: departement.id,
            name:departement.name ,
            Description: departement.Description,
           Responsable: departement. Responsable
    } );

    
      })
        .catch( err => alert(err) );
     }; 


    const putDepartement =(e) => {
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
   
        
   <div class="container">
           <htmlForm method="get" onSubmit={
            e =>{
                e.preventDefault();
                submit(e);
            } } >
            <h1 style={{stroke: "color:#1E97F3 ; font-size: large; text-align: center;"}}>Nouveau Département </h1>
           <h2>Nom du Département</h2>
           <input  value={stateDept.name}
                         onChange={e => {
                       let value = e.target.value ;
                          setstateDept ({ 
                         name: value,
                         Description :stateDept.Description,
                         id:stateDept.id,
                          Responsable: stateDept. Responsable
           
                         
                        
                         });
                        }}
          
           type="text" id='name ' placeholder="DEPT-NAME"/>
           <h2>Description</h2>
           <input  value={stateDept.name}
                         onChange={e => {
                       let value = e.target.value ;
                          setstateDept ({ 
                        Description:value,
                         name: stateDept.name,
                          id:stateDept.id,
                          Responsable: stateDept. Responsable
                        });
                    }}
           type="text" id='name ' placeholder="Entrez la Description ici"/>
           <h2>Responsable de  département:</h2>
           <input  value={stateDept.name}
                         onChange={e => {
                       let value = e.target.value ;
                          setstateDept ({ 
                          Responsable:value,
                         name: stateDept.name,
                          id:stateDept.id,
                          Description :stateDept.Description
                        });
                    }}
            type="text" id='Responsqble' placeholder=" Entrez le Responsable de  département:"/>

           <button>Confirmer</button>
           </htmlForm>
         </div>



    </div>
  )
}

export default  EditDepartement;