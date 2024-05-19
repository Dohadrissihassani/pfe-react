import React from 'react'
import GroupeRow from './GroupeRow';

function Groupe() {

  const [stateGroupe,setGroupeState ] = useState([]);

  useEffect(() => {
   getGroupe();
 }, []);

 const getGroupe =()=>{
   axios
   .get("")
   .then(data=>{
     setGroupeState(data.data);
   }).catch(err=> alert(err));
 };
const sendTest= () =>{
   console.log("asdf");
}



  return (
    

<div class="content-body">
         
         <div class="container-fluid mt-3">

             <div class="row">
                 <div class="col-lg-12">
                     <div class="card">
                         <div class="card-body">
                             <h4 class="card-title">La Liste des Groupes</h4>
                             <div class="active-member">
                                 <div class="table-responsive">
                                     <table class="table table-xs mb-0">
                                         <thead>
                                             <tr class="tr_table  zero-configuration">
                                                
                                                 <th>Groupe</th>
                                                 <th>projet</th>
                                                 <th>consulter </th>    
                                             </tr>
                                         </thead>
                                         <tbody>
                                           <GroupeRow stateGroupe ={ stateGroupe} sendTest={sendTest}/>
                                             
                                         </tbody> 
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

export default Groupe;