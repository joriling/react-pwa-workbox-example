import React from "react";

import NetflixLogo from '../icons/NetflixLogo'
import Nav from "./nav";

import { Link } from "react-router-dom"

import '../../images/netflix-logo.png'

const Header = () => {
  return (
    <header className="header">
      <div id="logo" className="logo">
        <Link to="/">
          <NetflixLogo />
        </Link>
      </div>
      <Nav/>
      <div className="user-profile">
        <div className="user">
          <div className="name">Jolly Ann</div>
          <div className="image">
            <img src="/images/netflix-logo.png" alt="netflic" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header