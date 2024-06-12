import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProfSideBar from "../../SideBar/ProfSideBar";

function ViewProf() {
  const [professor, setProfessor] = useState({
    nom: "",
    email: "",
    telephone: "",
    departement: ""
  });

  const professorId = 3; // Hardcode the ID to 3

  useEffect(() => {
    const loadProfessor = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/professeur/id/${professorId}`);
        setProfessor(response.data);
      } catch (error) {
        console.error('There was an error fetching the professor data:', error);
      }
    };
    console.log("The id is: ", professorId);
    loadProfessor();
  }, []);

  return (
    <>
      <ProfSideBar />
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <div className="read-content">
                    <div className="media pt-5">
                      <div className="media-body">
                        <h5 className="m-b-3"><strong>Le Nom: </strong>{professor.nom}</h5>
                        <p className="m-b-2">{professor.departement }</p>
                      </div>
                    </div>
                    <hr />
                    <div className="media mb-4 mt-1"></div>
                    <h5 className="m-b-15"><strong>Adress Email:</strong> {professor.email}</h5>
                    <h5 className="m-b-15"><strong>telephone:</strong> {professor.telephone}</h5>
                    <Link to={`/ModifierCompte/${professorId}`}>
                      <button className="btn btn-info mt-3">Modifie</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </>
  );
}

export default ViewProf;
