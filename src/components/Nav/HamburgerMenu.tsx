import * as React from 'react'

const HamburgerMenu: React.SFC = () => (
      <button
        aria-controls="navbarMain"
        aria-expanded="false"
        aria-label="Toggle navigation"
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarMain"
        type="button"
      >
        <span className="fas fa-bars" />
      </button>
)

export default HamburgerMenu
