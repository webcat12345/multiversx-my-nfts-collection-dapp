/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import brandLogo from "../../../assets/img/logo.svg";
import '../../../assets/custom.scss';
import { logout } from "@multiversx/sdk-dapp/utils";
import NavbarItems from "./navbarItems";

const NavbarSimple = (props) => {
  const handleLogout = () => {
    logout(`${window.location.origin}/multiversx-my-nfts-collection-dapp/`);
  };

  return ( <> 
    <nav className="navbar navbar-expand-lg  navbar-dark z-index-3 sticky-top bg-white py-3 pt-4 start-0 end-0 px-4">
      <div className="container px-0">
        <a className="navbar-brand font-weight-bolder ms-sm-3" href="https://www.creative-tim.com" target="_blank">
          <img width='80' alt="logo" src={brandLogo} />
        </a>
        <button className="navbar-toggler shadow-none ms-md-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon mt-2">
            <span className="navbar-toggler-bar bar1"></span>
            <span className="navbar-toggler-bar bar2"></span>
            <span className="navbar-toggler-bar bar3"></span>
          </span>
        </button>
        <div className="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0" id="navigation">
          <NavbarItems />
          {props.dashboardNav &&
            <ul className="navbar-nav">
              <li className="nav-item mx-0 mx-lg-2 mt-2 mt-lg-0 pe-2 d-flex align-items-center">
                <button type='button' className="btn btn-sm btn-white mb-0 me-1" onClick={handleLogout}>Disconnect</button>
              </li>
            </ul>
          }
        </div>
      </div>
    </nav>
    </>
  );
};

export default NavbarSimple;
