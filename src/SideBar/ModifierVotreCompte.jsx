import React from 'react'

function ModifierVotreCompte() {
    return (
        <>
     <div>
        <div id="preloader">
            <div className="loader">
                <svg className="circular" viewBox="25 25 50 50">
                    <circle className="path" cx="50" cy="50" r="20" fill="none" stroke-width="3" stroke-miterlimit="10" />
                </svg>
            </div>
        </div>
    <div id="main-wrapper">

        {/*************
        Nav header start
    **************/}
        <div className="nav-header" style={{backgroundColor:"#1E97F3"}}>
            <div className="brand-logo">

                <a href="index.html">
                    <b className="logo-abbr"><i className="fa-brands fa-pied-piper-pp fa-lg" style={{color: "#000000"}}></i> </b>
                    <span className="logo-compact"><img src="./images/logo-compact.png" alt="" /></span>
                    <span className="brand-title">
                        <h1 style={{color:"whitesmoke"}}><i className="fa-brands fa-pied-piper-pp fa-2Xl" style={{color: "whitesmoke"}}></i>PFEasy</h1>
                    </span>
                </a>
            </div>
        </div>
        {/*************
        Nav header end
    **************/}

        {/*************
        Header start
    **************/}
        <div className="header">
            <div className="header-content clearfix">

                <div className="nav-control">
                    <div className="hamburger">
                        <span className="toggle-icon"><i className="icon-menu"></i></span>
                    </div>
                </div>
                <div className="header-left">
                    <div className="input-group icons">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-transparent border-0 pr-2 pr-sm-3" id="basic-addon1"><i className="mdi mdi-magnify"></i></span>
                        </div>
                        <input type="search" className="form-control" placeholder="Chercher" aria-label="Search Dashboard" />
                        <div className="drop-down animated flipInX d-md-none">
                            <form action="#">
                                <input type="text" className="form-control" placeholder="Search" />
                            </form>
                        </div>
                    </div>
                </div>
                <div className="header-right">
                    <ul>
                        <li className="icons dropdown d-none d-md-flex">
                            <a href="javascript:void(0)" className="log-user" data-toggle="dropdown">
                                <span>Français</span>  <i className="fa fa-angle-down f-s-14" aria-hidden="true"></i>
                            </a>
                            <div className="drop-down dropdown-language animated fadeIn  dropdown-menu">
                                <div className="dropdown-content-body">
                                    <ul>
                                        <li><a href="javascript:void()">Français</a></li>
                                        <li><a href="javascript:void()">English</a></li>

                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="icons dropdown">
                            <div className="user-img c-pointer position-relative" data-toggle="dropdown">
                                <span className="activity active"></span>
                                <img src="images/user/1.png" height="40" width="40" alt="" />
                            </div>
                            <div className="drop-down dropdown-profile animated fadeIn dropdown-menu">
                                <div className="dropdown-content-body">
                                    <ul>
                                        <li>
                                            <i className="icon-user"></i> <span>Le Nom d'utilisateur</span>
                                        </li>
                                        <hr className="my-2" />

                                        <li> <link to="/HomeBefor"> <span>Se deconnecter</span></link></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        {/*************
        Header end ti-comment-alt
    **************/}

        {/*************
        Sidebar start
    **************/}
        <div className="nk-sidebar">
            <div className="nk-nav-scroll">
                <ul className="metismenu" id="menu">
                    <li className="nav-label " style={{color:"#1E97F3"}}><strong>Gestion De PFE</strong></li>


                    {/* </ul>
                </li>
                <li>
                    <a className="has-arrow" href="javascript:void()" aria-expanded="false">
                        <i className="icon-layers menu-icon"></i><span className="nav-text">Components</span>
                    </a>
                    <ul aria-expanded="false"> */}
                    <li>
                        <a className="has-arrow" href="javascript:void()" aria-expanded="false">
                            <i className="fa-solid fa-user-gear"></i><span className="nav-text">Gérer  profile</span>
                        </a>
                        <ul aria-expanded="false">
                            <li><a href="./MonProfil.html"><i className="fa-solid fa-user-check"></i>mon profile</a></li>
                            <li><a href="./ModifierVotreCompte.html"><i className="fa-solid fa-id-card"></i>modifier profile</a></li>
                        </ul>
                    </li>

                    <li>
                        <a className="has-arrow" href="javascript:void()" aria-expanded="false">
                            <i className="fa-solid fa-graduation-cap"></i><span className="nav-text">Gérer  projets</span>
                        </a>
                        <ul aria-expanded="false">
                            <li><a href="./CréerProjet.html"><i className="fa-solid fa-book-open"></i>Créer projet </a></li>
                            <li><a href="./AffecterProjet.html"><i className="fa-solid fa-list-check"></i>Affecter projet</a></li>
                            <li><a href="./MesProjets.html"><i className="fa-solid fa-layer-group"></i>Mes projets</a></li>
                            <li><a href="./ProjetsArchivés.html"><i className="fa-solid fa-box-archive"></i>projets Archivés</a></li>
                        </ul>
                    </li>
                    <li className="mega-menu mega-menu-sm">
                        <a className="has-arrow" href="javascript:void()" aria-expanded="false">
                            <i className="fa-solid fa-users-gear"></i><span className="nav-text">Gérer  Groupe</span>
                        </a>
                        <ul aria-expanded="false">
                            <li><a href="./MesGroupesEncadtant.html"> <i className="fa-solid fa-users-line"></i>Mes Groupes</a></li>


                        </ul>
                    </li>
                    <li>
                    <Link to="/HomeBefor" aria-expanded="false">
                            <i className="fa-solid fa-arrow-right-from-bracket"></i><span className="nav-text">Se deconnecter</span>
                        </Link>
                    </li>



                </ul>
            </div>
        </div>
        <div className="content-body">

            <div className="container" >
                <h4>Modifier votre compte</h4>
                <form method="get">
                    <label for="nom">Nom et Prénom :</label>
                    <input type="text" id="nom" name="nom" placeholder="Entrez le nom et le prénom" required />

                    <label for="email">Adresse e-mail :</label>
                    <input type="email" id="email" name="email" placeholder="Entrez l'adresse e-mail" required />



                    <label for="tel">Téléphone :</label>
                    <input type="tel" id="tel" name="tel" placeholder="Entrez le numéro de téléphone" required />

                    <label for="departement">Département :</label>
                    <select id="departement" name="departement">
                        <option value="DEPARTMENT MATH-INFO">DEPARTMENT MATH-INFO</option>
                        <option value="DEPARTMENT ARTMENT PHYSIQUE">DEPARTMENT PHYSIQUE</option>
                        <option value="DEPARTMENT BILOGIE">DEPARTMENT BILOGIE</option>
                        <option value="DEPARTMENT CHIMIE">DEPARTMENT CHIMIE</option>

                        {/* Ajoutez d'autres options de département si nécessaire */}
                    </select>


                    <button type="submit">Confirmer</button>
                </form>
            </div>

        </div>
        {/*************
        Footer end
    **************/}
    </div>
    </div>
  </>
    )
}

export default ModifierVotreCompte