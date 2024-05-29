import React, {useEffect,useState} from 'react';
import axios from 'axios';
import { Link ,useParams} from "react-router-dom";

function ViewprofEtud() {
  
    const [Etudiant , setEtudiant] = useState({
        name: "",
        departement: "",
        email: "",
        codeApogee: "",
        telephone: ""
      });



      const { id } = useParams();

       useEffect(() => {
         const loadEtudiant= async () => {
      try {
        const result = await axios.get(`http://`);
        setEtudiant(result.data);
      } catch (error) {
        console.error('There was an error fetching the professeur data:', error);
      }
       };
       console.log("The id is: ", id);
        loadEtudiant();
       }, [id]);
    return (

    <div>
 <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                
                                    <div className="read-content">
                                        <div className="media pt-5">
                                            <img className="mr-3 rounded-circle "width="100px" height="120px" src="profil.jpg"/>
                                            <div className="media-body">
                                                <h5 className="m-b-3">Le nom de Etudiant: {Etudiant.name}</h5>
                                                <p className="m-b-2">{Etudiant.departement}</p>
                                            </div>
                                            
                                        </div>
                                        
                                    </div>
                                        <h5 className="m-b-15"><strong>Adresse mail :</strong> {Etudiant.email}</h5>
                                        <h5 className="m-b-15"><strong>Code Apogée :</strong> {Etudiant.codeApogee}</h5>
                                        <h5 className="m-b-15"><strong>téléphone :</strong>{Etudiant.telephone}</h5>  
                                        <Link to={`/ModifierCompteEtud/${id}`}>
                                             <button className="btn btn-info mt-3">Modifie</button>
                                         </Link>   
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    </div>
  );
}

export default ViewprofEtud