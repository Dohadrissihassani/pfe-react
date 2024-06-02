import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProfSideBar from "../../SideBar/ProfSideBar";

function ViewProf() {
  const [Professeur, setProfesseur] = useState({
    name: "",
    email: "",
    telephone: "",
    departement: ""
  });

  const { id } = useParams();

  useEffect(() => {
    const loadProfesseur = async () => {
      try {
        const result = await axios.get(`http://localhost:8080/professeur/${id}`);
        setProfesseur(result.data);
      } catch (error) {
        console.error('There was an error fetching the professeur data:', error);
      }
    };
    console.log("The id is: ", id);
    loadProfesseur();
  }, [id]);

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
                        <h5 className="m-b-3">Le Nom De Professeur: {Professeur.name} </h5>
                        <p className="m-b-2"> {Professeur.departement}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="media mb-4 mt-1"></div>
                    <h5 className="m-b-15"><strong>Adresse mail : </strong> {Professeur.email}</h5>
                    <h5 className="m-b-15"><strong>Téléphone :</strong> {Professeur.telephone}</h5>
                    {/*<Link to={`/ModifierCompte/${id}`}>*/}
                    <Link to="/ModifierCompte">
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
