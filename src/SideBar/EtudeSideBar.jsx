import React, { useState } from 'react';

function EtudeSideBar() {
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
                        <a className="has-arrow" href="javascript:void(0)" onClick={() => toggleSubMenu('gestion-compte')}>
                            <i className="fa-solid fa-user-gear"></i>
                            <span className="nav-text">Gestion du Compte</span>
                        </a>
                        <ul className="sub-menu" id="gestion-compte" style={{ display: activeSubMenu === 'gestion-compte' ? 'block' : 'none' }}>

                            <li><a href="./ProfilEtudiant.html"><i className="fa-solid fa-user-check"></i>Mon Profile</a></li>
                            <li><a href="./ModifierEtudiant.html"><i className="fa-solid fa-id-card"></i>Modifier Compte</a></li>
                        </ul>
                    </li>
                    <li className="mega-menu mega-menu-sm">
                        <a className="has-arrow" href="javascript:void(0)"  onClick={() => toggleSubMenu('gestion-groupe')}>
                            <i className="fa-solid fa-users-gear"></i>
                            <span className="nav-text">Gestion de Groupe</span>
                        </a>
                        <ul className="sub-menu" id="gestion-groupe" style={{ display: activeSubMenu === 'gestion-groupe' ? 'block' : 'none' }}>

                            <li><a href="./CréerGroupe.html"><i className="fa-solid fa-users-line"></i>Créer Groupe</a></li>
                            <li><a href="./MonGroupe.html"><i className="fa-solid fa-users-rectangle"></i>Mon Groupe</a></li>
                            <li><a href="./ModifierGroupe.html"><i className="fa-solid fa-people-group"></i>Modifier Groupe</a></li>
                            <li><a href="./ModifierResponsable.html"><i className="fa-solid fa-user-pen"></i>Modifier Responsable</a></li>
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

export default  EtudeSideBar;
