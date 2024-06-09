import React from 'react';
import { Link } from 'react-router-dom';

import HomeSideBar from '../../SideBar/HomeSideBar';


function HomeBe() {
  return (
    <>
      <HomeSideBar />
      <div className="content-body">
        <div className="container-fluid mt-3">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body d-flex flex-column flex-md-row">
                  <div className="text-section">
                    <h1 className="welcome-title">
                      Bienvenue sur <strong className="brand-color">PFEasy</strong>,<br /><br />
                      Valorisez vos Projets de Fin d'Études !
                    </h1>
                    <div className="button-group mt-4">
                      <Link to="/SignUp">
                        <button type="button" className="btn btn-info mr-2">S'inscrire</button>
                      </Link>
                      <Link to="/login">
                        <button className="btn btn-outline-info">Se connecter</button>
                      </Link>
                    </div>
                  </div>
                  <div className="image-section ml-md-auto mt-4 mt-md-0">
                    <img src="./interface/images/home.jpeg" alt="" className="home-image" width="300px" height="400px" />
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

export default HomeBe;
