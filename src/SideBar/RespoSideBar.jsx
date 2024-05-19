import React, { useState } from 'react';

function RespoSideBar() {
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
                        <a href="RespoListeProjetGlobale.html" aria-expanded="false">
                            <i className="fa-solid fa-diagram-project"></i><span className="nav-text">Les Projets</span>
                        </a>
                    </li>
                    <li>
                        <a href="RespoAffecter_encadrant.html" aria-expanded="false">
                            <i className="fa-solid fa-link"></i><span className="nav-text">Affecter Encadrant</span>
                        </a>
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

export default RespoSideBar;
