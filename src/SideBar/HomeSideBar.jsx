import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function HomeSideBar() {
    const [activeSubMenu, setActiveSubMenu] = useState(null);

    function toggleSubMenu(subMenuId) {
        setActiveSubMenu(subMenuId === activeSubMenu ? null : subMenuId);
    }

    return (
        <>
            <div className="nav-header" style={{ backgroundColor: "#1E97F3" }}>
                <div className="brand-logo">
                    <a href="/">
                        <b className="logo-abbr">
                            <i className="fa-brands fa-pied-piper-pp fa-lg" style={{ color: "#000000" }}></i>
                        </b>
                        <span className="logo-compact">
                            <img src="./images/logo-compact.png" alt="Logo" />
                        </span>
                        <span className="brand-title">
                            <h1 style={{ color: "whitesmoke" }}>
                                <i className="fa-brands fa-pied-piper-pp fa-2xl" style={{ color: "whitesmoke" }}></i> PFEasy
                            </h1>
                        </span>
                    </a>
                </div>
            </div>

            <div className="nk-sidebar">
                <div className="nk-nav-scroll">
                    <ul className="metismenu" id="menu">
                        <li className="nav-label" onClick={() => toggleSubMenu('gerer-profile')}>
                            Gestion De PFE
                        </li>
                        <li className="sub-menu" id="gerer-profile" style={{ display: activeSubMenu === 'gerer-profile' ? 'block' : 'none' }}>
                            <ul>
                                <li>
                                    <Link to="/HomeBefor" aria-expanded="false">
                                        <i className="fa-solid fa-house"></i><span className="nav-text">L'accueil</span>
                                    </Link>
                                </li>
                               
                              
                              
                               
                            </ul>
                        </li>
                        {/* Add more top-level menu items here as needed */}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default HomeSideBar;
