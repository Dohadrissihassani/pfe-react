import React from 'react'

function AddGroupe() {
    
    const submit =e  => {

        let  name= e.targer[0].value;
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
      <div class="content-body">

<div class="container-fluid mt-3">

    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    
                    <h4 class="card-title">Liste des Étudiants</h4>
                   
                     <button class="btn btn-info">Cree un Groupe</button>
                    
                    <table class="table table-striped table-hover mt-3 text-center table-bordered">

                        <thead>
                            <tr>


                                <th>Le Nom</th>
                                <th>Le prénom</th>
                                <th>code appogee</th>
                                <th>choisissez votre partenaire</th>
                            </tr>
                        </thead>

                        <tbody id="data">
                            <tr>
                                <td>Tiger Nixonhihi</td>
                                <td>System Architect</td>
                                <td>767686</td>
                                <td> <button class="btn btn-light"><i class="bi bi-check-square"></i></button></td>

                            </tr>
                           

                        </tbody>

                    </table>
                  
    <nav aria-label="Page navigation example" style="float: right;">
<ul class="pagination">
<li class="page-item">
<a class="page-link" href="#" aria-label="Previous">
  <span aria-hidden="true">&laquo;</span>
  <span class="sr-only">Previous</span>
</a>
</li>
<li class="page-item"><a class="page-link" href="#">1</a></li>
<li class="page-item"><a class="page-link" href="#">2</a></li>
<li class="page-item"><a class="page-link" href="#">3</a></li>
<li class="page-item">
<a class="page-link" href="#" aria-label="Next">
  <span aria-hidden="true">&raquo;</span>
  <span class="sr-only">Next</span>
</a>
</li>
</ul>
   </nav>
                </div>
              
          
            </div>


          



        </div>
    </div>
</div>

</div>

    </div>
  )
}

export default AddGroupe