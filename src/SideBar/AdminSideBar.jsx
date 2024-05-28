import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AdminSideBar() {
    const [activeSubMenu, setActiveSubMenu] = useState(null);

    function toggleSubMenu(subMenuId) {
        setActiveSubMenu(subMenuId === activeSubMenu ? null : subMenuId);
    }

    function handleSeDeconnecter() {
        setActiveSubMenu(null); 
    }

    return (
        <>
            <div className="nav-header" style={{backgroundColor:"#1E97F3"}}>
                <div className="brand-logo">
                    <a href="/">
                        <b className="logo-abbr"><i className="fa-brands fa-pied-piper-pp fa-lg" style={{color: "#000000"}}></i> </b>
                        <span className="logo-compact"><img src="./images/logo-compact.png" alt=""/></span>
                        <span className="brand-title">
                            <h1 style={{color:"whitesmoke"}}><i className="fa-brands fa-pied-piper-pp fa-2Xl" style={{color: "whitesmoke"}}></i>PFEasy</h1>
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
                                <li><Link to="/creeProfesseur"><i className="fa-solid fa-user-tie"></i>Créer un Compte</Link></li>
                                <li><Link to="/Liste_Professeur"><i className="fa-solid fa-users-line"></i>Les Professeurs</Link></li>
                            </ul>
                        </li>
                        <li>
                            <a className="has-arrow" href="#" 
                                onClick={() => toggleSubMenu('gerer-utilisateur')}>
                                <i className="fa-solid fa-user-gear"></i>
                                <span className="nav-text">Gérer utilisateur</span>
                            </a>
                            <ul className="sub-menu" id="gerer-utilisateur" style={{ display: activeSubMenu === 'gerer-utilisateur' ? 'block' : 'none' }}>
                                <li><Link to="/admin-approuverEtud"><i className="fa-solid fa-user-check"></i>Approuver Étudiant</Link></li>
                                <li><Link to="/Suprim_disactiveCompte"><i className="fa-solid fa-id-card"></i>Utilisateur</Link></li>
                            </ul>
                        </li>
                        <li>
                            <a className="has-arrow" href="#" 
                                onClick={() => toggleSubMenu('gerer-departement')}>
                                <i className="fa-solid fa-layer-group"></i>
                                <span className="nav-text">Gérer Département</span>
                            </a>
                            <ul className="sub-menu" id="gerer-departement" style={{ display: activeSubMenu === 'gerer-departement' ? 'block' : 'none' }}>
                                <li><Link to="/creeDepartement"><i className="fa-solid fa-school-circle-check"></i>Créer département</Link></li>
                                <li><Link to="/listeDepart"><i className="fa-solid fa-school-flag"></i>Les département</Link></li>
                            </ul>
                        </li>
                        <li>
                            <a className="has-arrow" href="#" 
                                onClick={() => toggleSubMenu('gerer-filieres')}>
                                <i className="fa-solid fa-scroll"></i>
                                <span className="nav-text">Gérer les Filières</span>
                            </a>
                            <ul className="sub-menu" id="gerer-filieres" style={{ display: activeSubMenu === 'gerer-filieres' ? 'block' : 'none' }}>
                                <li><Link to="/Liste-Filiere"><i className="fa-brands fa-readme"></i>Les Filières </Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/homeBefore" aria-expanded="false" onClick={handleSeDeconnecter}>
                                <i className="fa-solid fa-arrow-right-from-bracket"></i><span className="nav-text">Se deconnecter</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default AdminSideBar;
