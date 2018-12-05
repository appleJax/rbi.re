import * as React from 'react'
import LogoImg from "Images/logo.png"

const Logo: React.SFC = () => (
  <a className="navbar-brand" href="#">
    <img src={LogoImg} alt="logo"/>
  </a>
)

export default Logo
