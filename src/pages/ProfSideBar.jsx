import React, { useState } from 'react';

function ProfSideBar() {
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
                    <li className="nav-label" style={{ color: '#1E97F3' }}><strong>Gestion De PFE</strong></li>

                    <li>
                        <a className="has-arrow" href="javascript:void(0)" onClick={() => toggleSubMenu('gerer-profile')}>
                            <i className="fa-solid fa-user-gear"></i><span className="nav-text">Gérer profile</span>
                        </a>
                        <ul className="sub-menu" id="gerer-profile" style={{ display: activeSubMenu === 'gerer-profile' ? 'block' : 'none' }}>
                            <li><a href="./MonProfil.html"><i className="fa-solid fa-user-check"></i>mon profile</a></li>
                            <li><a href="./ModifierVotreCompte.html"><i className="fa-solid fa-id-card"></i>modifier profile</a></li>
                        </ul>
                    </li>
                    
                    <li>
                        <a className="has-arrow" href="javascript:void(0)" onClick={() => toggleSubMenu('gerer-projets')}>
                            <i className="fa-solid fa-graduation-cap"></i><span className="nav-text">Gérer projets</span>
                        </a>
                        <ul className="sub-menu" id="gerer-projets" style={{ display: activeSubMenu === 'gerer-projets' ? 'block' : 'none' }}>
                            <li><a href="./CréerProjet.html"><i className="fa-solid fa-book-open"></i>Créer projet </a></li>
                            <li><a href="./AffecterProjet.html"><i className="fa-solid fa-list-check"></i>Affecter projet</a></li>
                            <li><a href="./MesProjets.html"><i className="fa-solid fa-layer-group"></i>Mes projets</a></li>
                            <li><a href="./ProjetsArchivés.html"><i className="fa-solid fa-box-archive"></i>projets Archivés</a></li>
                        </ul>
                    </li>
                    
                    <li className="mega-menu mega-menu-sm">
                        <a className="has-arrow" href="javascript:void(0)" onClick={() => toggleSubMenu('gerer-groupe')}>
                            <i className="fa-solid fa-users-gear"></i><span className="nav-text">Gérer Groupe</span>
                        </a>
                        <ul className="sub-menu" id="gerer-groupe" style={{ display: activeSubMenu === 'gerer-groupe' ? 'block' : 'none' }}>
                            <li><a href="./MesGroupesEncadtant.html"><i className="fa-solid fa-users-line"></i>Mes Groupes</a></li>
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

export default ProfSideBar;
