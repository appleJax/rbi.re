import * as React from 'react'

interface Label extends React.Props<any> {
  label: string,
}

const NavLink: React.SFC<Label> = ({ label }) => (
  <li className="nav-item">
    <a className="nav-link" href="#">
      { label }
    </a>
  </li>
)

export default NavLink
