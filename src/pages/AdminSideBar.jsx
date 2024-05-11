import React, { useState } from 'react';

function AdminSideBar() {
    
    const [activeSubMenu, setActiveSubMenu] = useState(null);

    function toggleSubMenu(subMenuId) {
        setActiveSubMenu(subMenuId === activeSubMenu ? null : subMenuId);
    }

    function handleSeDeconnecter() {
        setActiveSubMenu(null); // Hide all submenus
    }

    return (
        <> 
          <div class="nav-header" style={{backgroundColor:"#1E97F3"}}>
        <div class="brand-logo">
           
            <a href="index.html">
                <b class="logo-abbr"><i class="fa-brands fa-pied-piper-pp fa-lg" style={{color: "#000000"}}></i> </b>
                <span class="logo-compact"><img src="./images/logo-compact.png" alt=""/></span>
                <span class="brand-title">
                    <h1 style={{color:"whitesmoke"}}><i class="fa-brands fa-pied-piper-pp fa-2Xl" style={{color: "whitesmoke"}}></i>PFEasy</h1>
                </span>
            </a>
        </div>
    </div>
        <div className="nk-sidebar">
            <div className="nk-nav-scroll">
                <ul className="metismenu" id="menu">
                    <li className="nav-label" style={{ color: '#1E97F3' }}>
                        <strong>Gestion De PFE</strong>
                    </li>

                    <li>
                        <a className="has-arrow" href="#" 
                            onClick={() => toggleSubMenu('gerer-professeurs')}>
                            <i className="fa-solid fa-users-gear"></i>
                            <span className="nav-text">Gérer Les Professeurs</span>
                        </a>
                        <ul className="sub-menu" id="gerer-professeurs" style={{ display: activeSubMenu === 'gerer-professeurs' ? 'block' : 'none' }}>

                            <li><a href="./creeProfesseur.html"><i className="fa-solid fa-user-tie"></i>Créer un Compte</a></li>
                            <li><a href="./Liste_Professeur.html"><i className="fa-solid fa-users-line"></i>Les Professeurs</a></li>
                        </ul>
                    </li>

                    <li>
                        <a className="has-arrow" href="#" 
                            onClick={() => toggleSubMenu('gerer-utilisateur')}>
                            <i className="fa-solid fa-user-gear"></i>
                            <span className="nav-text">Gérer utilisateur</span>
                        </a>
                        <ul className="sub-menu" id="gerer-utilisateur" style={{ display: activeSubMenu === 'gerer-utilisateur' ? 'block' : 'none' }}>

                            <li><a href="./admin-approuverEtud.html"><i className="fa-solid fa-user-check"></i>Approuver Étudiant</a></li>
                            <li><a href="./Suprim_disactiveCompte.html"><i className="fa-solid fa-id-card"></i>Utilisateur</a></li>
                        </ul>
                    </li>

                    <li>
                        <a className="has-arrow" href="#" 
                            onClick={() => toggleSubMenu('gerer-departement')}>
                            <i className="fa-solid fa-layer-group"></i>
                            <span className="nav-text">Gérer Département</span>
                        </a>
                        <ul className="sub-menu" id="gerer-departement" style={{ display: activeSubMenu === 'gerer-departement' ? 'block' : 'none' }}>

                            <li><a href="./creeDepartement.html"><i className="fa-solid fa-school-circle-check"></i>Créer département</a></li>
                            <li><a href="./listeDepart.html"><i className="fa-solid fa-school-flag"></i>Les département</a></li>
                        </ul>
                    </li>

                    <li>
                        <a className="has-arrow" href="#" 
                            onClick={() => toggleSubMenu('gerer-filieres')}>
                            <i className="fa-solid fa-scroll"></i>
                            <span className="nav-text">Gérer les Filières</span>
                        </a>
                        <ul className="sub-menu" id="gerer-filieres" style={{ display: activeSubMenu === 'gerer-filieres' ? 'block' : 'none' }}>

                            <li><a href="./Liste-Filiere.html"><i className="fa-brands fa-readme"></i>Les Filières </a></li>
                        </ul>
                    </li>

                    <li>
                    <a href="homeBefore.html" aria-expanded="false" onClick={handleSeDeconnecter}>
                            <i className="fa-solid fa-arrow-right-from-bracket"></i><span className="nav-text">Se deconnecter</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        </>
    );
}

export default AdminSideBar;
