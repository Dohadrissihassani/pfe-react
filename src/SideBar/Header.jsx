import React from 'react'

function Header() {
  return (
    <>
    <div class="nav-header" style="background-color:#1E97F3;">
    <div class="brand-logo">
       
        <a href="index.html">
            <b class="logo-abbr"><i class="fa-brands fa-pied-piper-pp fa-lg" style="color: #000000;"></i> </b>
            <span class="logo-compact"><img src="./images/logo-compact.png" alt=""/></span>
            <span class="brand-title">
                <h1 style="color:whitesmoke;"><i class="fa-brands fa-pied-piper-pp fa-2Xl" style="color: whitesmoke;"></i>PFEasy</h1>
            </span>
        </a>
    </div>
</div>
    <div class="header">    
            <div class="header-content clearfix">
                
                <div class="nav-control">
                    <div class="hamburger">
                        <span class="toggle-icon"><i class="icon-menu"></i></span>
                    </div>
                </div>
                <div class="header-left">
                    <div class="input-group icons">
                        <div class="input-group-prepend">
                            <span class="input-group-text bg-transparent border-0 pr-2 pr-sm-3" id="basic-addon1"><i class="mdi mdi-magnify"></i></span>
                        </div>
                        <input type="search" class="form-control" placeholder="Chercher" aria-label="Search Dashboard"/>
                        <div class="drop-down animated flipInX d-md-none">
                            <form action="#">
                                <input type="text" class="form-control" placeholder="Search"/>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="header-right">
                    
                        <li class="icons dropdown d-none d-md-flex">
                            <a href="javascript:void(0)" class="log-user"  data-toggle="dropdown">
                                <span>Français</span>  <i class="fa fa-angle-down f-s-14" aria-hidden="true"></i>
                            </a>
                            <div class="drop-down dropdown-language animated fadeIn  dropdown-menu">
                                <div class="dropdown-content-body">
                                    <ul>
                                        <li><a href="javascript:void()">Français</a></li>
                                        <li><a href="javascript:void()">English</a></li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li class="icons dropdown">
                            <div class="user-img c-pointer position-relative"   data-toggle="dropdown">
                                <span class="activity active"></span>
                                <img src="images/user/1.png" height="40" width="40" alt=""/>
                            </div>
                            <div class="drop-down dropdown-profile animated fadeIn dropdown-menu">
                                <div class="dropdown-content-body">
                                    <ul>
                                        <li>
                                            <i class="icon-user"></i> <span>Le Nom d'utilisateur</span>
                                        </li>
                                        <hr class="my-2"/>
                                       
                                        <li><a href="homaBefore.html"><i class="icon-key"></i> <span>Se deconnecter</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                   
                </div>
            </div>
        </div>
        </>
  )
}

export default Header