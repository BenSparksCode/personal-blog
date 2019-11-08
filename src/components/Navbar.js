import React from 'react'
import { Link } from 'gatsby'

import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import linkedin from '../img/social/linkedin.svg'
import github from '../img/social/github.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: 'is-active',
          })
          : this.setState({
            navBarActiveClass: '',
          })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        style={{
          boxShadow: "0 6px 12px 0 rgba(0,0,0,0.8)",
          position: "fixed",
          width: "100%"
        }}
        
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
          
          </div>

          <div className="navbar-items">
              <div className="side-1">
                <Link className="navbar-item" to="/">
                  Home
            </Link>
                <Link className="navbar-item" to="/blog">
                  Blog
            </Link>
                <Link className="navbar-item" to="/about">
                  About
            </Link>
              </div>
              <div className="side-2">
              <a title="twitter" href="https://twitter.com/Nebbit123">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>

                <a title="linkedin" href="https://www.linkedin.com/in/ben-sparks-a38a667a/">
                  <img
                    src={linkedin}
                    alt="LinkedIn"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>

                <a title="github" href="https://github.com/BenSparksCode">
                  <img
                    src={github}
                    alt="GitHub"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>

                <a title="instagram" href="https://www.instagram.com/bensparks0/">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
