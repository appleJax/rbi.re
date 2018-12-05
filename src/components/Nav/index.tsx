import * as React from 'react'
import Logo from "./Logo"
import HamburgerMenu from "./HamburgerMenu"
import NavLinkList from "./NavLinkList"

interface State {
  transparent: boolean
}

class Nav extends React.Component<{}, State> {
  constructor(props) {
    super(props)

    this.state = {
      transparent: true,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const xPosition = window.document.scrollingElement.scrollTop

    if (xPosition >= 50) {
      this.setState({ transparent: false })
    } else {
      this.setState({ transparent: true })
    }
  }

  public render() {
    const transparent = this.state.transparent
      ? ''
      : 'fixed'

    return (
      <div className={`top-menu ${transparent}`}>
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <Logo />
            <HamburgerMenu />
            <NavLinkList />
          </nav>
        </div>
      </div>
    )
  }
}

export default Nav
