import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function ProfSideBar() {
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  function toggleSubMenu(subMenuId) {
    setActiveSubMenu(activeSubMenu === subMenuId ? null : subMenuId);
  }

  function handleSeDeconnecter() {
    setActiveSubMenu(null); // Hide all submenus
  }

  return (
    <>
    
      <div className="nav-header" style={{ backgroundColor: "#1E97F3" }}>
      <div className="brand-logo">
                    <a href="#">
                        <b className="logo-abbr"><i className="fa-brands fa-pied-piper-pp fa-lg" style={{ color: "#000000" }}></i> </b>
                        <span className="logo-compact"><img src="./images/logo-compact.png" alt="" /></span>
                        <span className="brand-title">
                            <h1 style={{ color: "whitesmoke" }}><i className="fa-brands fa-pied-piper-pp fa-2Xl" style={{ color: "whitesmoke" }}></i>PFEasy</h1>
                        </span>
                    </a>
                </div>
      </div>
      <div className="nk-sidebar">           
        <div className="nk-nav-scroll">
          <ul className="metismenu" id="menu">
            <li className="nav-label" style={{ color: '#1E97F3' }}><strong>Gestion De PFE</strong></li>

            <li>
              <a className="has-arrow" href="javascript:void(0)" onClick={() => toggleSubMenu('gerer-profile')}>
                <i className="fa-solid fa-user-gear"></i><span className="nav-text">Gérer profile</span>
              </a>
              <ul className="sub-menu" id="gerer-profile" style={{ display: activeSubMenu === 'gerer-profile' ? 'block' : 'none' }}>
                <li>
                  <NavLink to="/MonProfil" activeClassName="active-link"><i className="fa-solid fa-user-check"></i>mon profile</NavLink>
                </li>
                <li>
                  <NavLink to="/ModifierCompte" activeClassName="active-link"><i className="fa-solid fa-id-card"></i>modifier profile</NavLink>
                </li>
              </ul>
            </li>
            
            <li>
              <a className="has-arrow" href="javascript:void(0)" onClick={() => toggleSubMenu('gerer-projets')}>
                <i className="fa-solid fa-graduation-cap"></i><span className="nav-text">Gérer projets</span>
              </a>
              <ul className="sub-menu" id="gerer-projets" style={{ display: activeSubMenu === 'gerer-projets' ? 'block' : 'none' }}>
                <li>
                  <NavLink to="/creeProjet" activeClassName="active-link"><i className="fa-solid fa-book-open"></i>Créer projet</NavLink>
                </li>
                <li>
                  <NavLink to="/AffecterProjet" activeClassName="active-link"><i className="fa-solid fa-list-check"></i>Affecter projet</NavLink>
                </li>
                <li>
                  <NavLink to="/ListeProjet" activeClassName="active-link"><i className="fa-solid fa-layer-group"></i>Mes projets</NavLink>
                </li>
                <li>
                  <NavLink to="/ProjetsArchivés" activeClassName="active-link"><i className="fa-solid fa-box-archive"></i>projets Archivés</NavLink>
                </li>
              </ul>
            </li>
            
            <li className="mega-menu mega-menu-sm">
              <a className="has-arrow" href="javascript:void(0)" onClick={() => toggleSubMenu('gerer-groupe')}>
                <i className="fa-solid fa-users-gear"></i><span className="nav-text">Gérer Groupe</span>
              </a>
              <ul className="sub-menu" id="gerer-groupe" style={{ display: activeSubMenu === 'gerer-groupe' ? 'block' : 'none' }}>
                <li>
                  <NavLink to="/MesGroupesEncadrant" activeClassName="active-link"><i className="fa-solid fa-users-line"></i>Mes Groupes</NavLink>
                </li>
              </ul>
            </li>
            
            <li>
              <NavLink to="/homeBefore" aria-expanded="false" onClick={handleSeDeconnecter}>
                <i className="fa-solid fa-arrow-right-from-bracket"></i><span className="nav-text">Se deconnecter</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ProfSideBar;
