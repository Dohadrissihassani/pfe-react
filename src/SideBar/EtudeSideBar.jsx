import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
                        <li className="nav-label" style={{ color: '#1E97F3' }}>
                            <strong>Gestion De PFE</strong>
                        </li>
                        <li>
                            <a className="has-arrow" href="javascript:void(0)" onClick={() => toggleSubMenu('gerer-profile')}>
                                <i className="fa-solid fa-user-gear"></i><span className="nav-text">Gérer profile</span>
                            </a>
                            <ul className="sub-menu" id="gerer-profile" style={{ display: activeSubMenu === 'gerer-profile' ? 'block' : 'none' }}>
                                <li>
                                    <Link to="/EtudiantProfil" activeClassName="active-link"><i className="fa-solid fa-user-check"></i>mon profile</Link>
                                </li>
                                <li>
                                    <Link to="/ModifierCompteEtudiant" activeClassName="active-link"><i className="fa-solid fa-id-card"></i>modifier profile</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="mega-menu mega-menu-sm">
                            <a className="has-arrow" href="javascript:void(0)" onClick={() => toggleSubMenu('gestion-groupe')}>
                                <i className="fa-solid fa-users-gear"></i><span className="nav-text">Gestion de Groupe</span>
                            </a>
                            <ul className="sub-menu" id="gestion-groupe" style={{ display: activeSubMenu === 'gestion-groupe' ? 'block' : 'none' }}>
                                <li><Link to="/CreateGroup" activeClassName="active-link"><i className="fa-solid fa-users-line"></i>Créer Groupe</Link></li>
                                <li><Link to="/MonGroupeEtud" activeClassName="active-link"><i className="fa-solid fa-users-rectangle"></i>Mon Groupe</Link></li>
                                <li><Link to="/ModifierGroupe" activeClassName="active-link"><i className="fa-solid fa-people-group"></i>Modifier Groupe</Link></li>
                                <li><Link to="/ModifierResponsable" activeClassName="active-link"><i className="fa-solid fa-user-pen"></i>Modifier Responsable</Link></li>
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

export default EtudeSideBar;
