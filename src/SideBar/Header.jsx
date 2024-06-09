import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            {/* Header start */}
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
                                    <span>Français</span> <i className="fa fa-angle-down f-s-14" aria-hidden="true"></i>
                                </a>
                                <div className="drop-down dropdown-language animated fadeIn dropdown-menu">
                                    <div className="dropdown-content-body">
                                        <ul>
                                            <li><a href="javascript:void(0)">Français</a></li>
                                            <li><a href="javascript:void(0)">English</a></li>
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
                                            <hr className="my-2" />
                                            <li>
                                                <Link to="/HomeBefor"><i className="icon-key"></i> <span>Se déconnecter</span></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Header end */}
        </div>
    );
}

export default Header;
