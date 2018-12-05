import * as React from 'react'
import NavLink from "./NavLink"

const NavLinkList: React.SFC = () => (
  <div className="collapse navbar-collapse" id="navbarMain">
    <ul className="navbar-nav ml-auto">
      <NavLink label="Home" />
      <NavLink label="About" />
      <NavLink label="Features" />
      <NavLink label="FAQ" />
      <NavLink label="Team" />
    </ul>
  </div>
)

export default NavLinkList
