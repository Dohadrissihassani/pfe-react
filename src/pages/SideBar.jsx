import React from 'react';

function SideBar() {
    return (
        <body>
            {/* Sidebar start */}
            <div className="nk-sidebar">
                <div className="nk-nav-scroll">
                    <ul className="metismenu" id="menu">
                        <li className="nav-label" style={{ color: '#1E97F3' }}>
                            <strong>Gestion De PFE</strong>
                        </li>

                        <li>
                            <a className="has-arrow" href="javascript:void()" aria-expanded="false">
                                <i className="fa-solid fa-users-gear"></i>
                                <span className="nav-text">Gérer Les Professeurs</span>
                            </a>
                            <ul aria-expanded="false">
                                <li><a href="./creeProfesseur.html"><i className="fa-solid fa-user-tie"></i>Créer un Compte</a></li>
                                <li><a href="./Liste_Professeur.html"><i className="fa-solid fa-users-line"></i>Les Professeurs</a></li>
                            </ul>
                        </li>

                        <li>
                            <a className="has-arrow" href="javascript:void()" aria-expanded="false">
                                <i className="fa-solid fa-user-gear"></i>
                                <span className="nav-text">Gérer utilisateur</span>
                            </a>
                            <ul aria-expanded="false">
                                <li><a href="./admin-approuverEtud.html"><i className="fa-solid fa-user-check"></i>Approuver Étudiant</a></li>
                                <li><a href="./Suprim_disactiveCompte.html"><i className="fa-solid fa-id-card"></i>Utilisateur</a></li>
                            </ul>
                        </li>

                        <li>
                            <a className="has-arrow" href="javascript:void()" aria-expanded="false">
                                <i className="fa-solid fa-layer-group"></i>
                                <span className="nav-text">Gérer Département</span>
                            </a>
                            <ul aria-expanded="false">
                                <li><a href="./creeDepartement.html"><i className="fa-solid fa-school-circle-check"></i>Créer département</a></li>
                                <li><a href="./listeDepart.html"><i className="fa-solid fa-school-flag"></i>Les département</a></li>
                            </ul>
                        </li>

                        <li>
                            <a className="has-arrow" href="javascript:void()" aria-expanded="false">
                                <i className="fa-solid fa-scroll"></i>
                                <span className="nav-text">Gérer les Filières</span>
                            </a>
                            <ul aria-expanded="false">
                                <li><a href="./Liste-Filiere.html"><i className="fa-brands fa-readme"></i>Les Filières</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="homeBefore.html" aria-expanded="false">
                                <i className="fa-solid fa-arrow-right-from-bracket"></i>
                                <span className="nav-text">Se deconnecter</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Sidebar end */}
        </body>
    );
}

export default SideBar;
