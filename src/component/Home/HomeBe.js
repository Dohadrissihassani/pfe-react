import React from 'react';
import { Link } from 'react-router-dom';




function HomeBe() {
  return (
    <>
    
    <div className="content-body">
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body" style={{ display: 'flex' }}>
                <div>
                  <h1 style={{ fontSize: '36px' }}>
                    Bienvenue sur <strong style={{ color: '#1E97F3' }}>PFEasy</strong>,<br /><br />
                    Valorisez vos Projets de Fin d'Études !
                  </h1>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                    <Link to="/SignUp">
                      <button type="button" className="btn btn-info">S'inscrire</button>
                    </Link>
                    <Link to="/login">
                      <button className="btn btn-outline-info">Se connecter</button>
                    </Link>
                  </div>
                </div>
                <div style={{ marginLeft: 'auto' }}>
                  <img src="./images/home.jpeg" alt="Home" width="300px" height="400px" />
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
