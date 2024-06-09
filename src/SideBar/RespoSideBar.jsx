import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
            <div className="nav-header" style={{ backgroundColor: "#1E97F3" }}>
                <div className="brand-logo">
                    <Link to="index.html">
                        <b className="logo-abbr"><i className="fa-brands fa-pied-piper-pp fa-lg" style={{ color: "#000000" }}></i> </b>
                        <span className="logo-compact"><img src="./images/logo-compact.png" alt="" /></span>
                        <span className="brand-title">
                            <h1 style={{ color: "whitesmoke" }}><i className="fa-brands fa-pied-piper-pp fa-2xl" style={{ color: "whitesmoke" }}></i>PFEasy</h1>
                        </span>
                    </Link>
                </div>
            </div>
            <div className="nk-sidebar">           
                <div className="nk-nav-scroll">
                    <ul className="metismenu" id="menu">
                        <li className="nav-label" style={{ color: '#1E97F3' }}><strong>Gestion De PFE</strong></li>

                        <li>
                            <Link to="/LesProjetsResponsable" aria-expanded="false">
                                <i className="fa-solid fa-diagram-project"></i><span className="nav-text">Les Projets</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/AffecterEncadrant" aria-expanded="false">
                                <i className="fa-solid fa-link"></i><span className="nav-text">Affecter Encadrant</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/HomeBefor" aria-expanded="false" onClick={handleSeDeconnecter}>
                                <i className="fa-solid fa-arrow-right-from-bracket"></i><span className="nav-text">Se deconnecter</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default RespoSideBar;
