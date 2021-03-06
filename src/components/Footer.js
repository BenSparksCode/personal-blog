import React from 'react'
import { Link } from 'gatsby'

import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import linkedin from '../img/social/linkedin.svg'
import github from '../img/social/github.svg'

//TODO: Only socials and maybe subtle home, blog, about me buttons

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter"
      
      style={{
        borderTop: "3px solid rgb(255, 30, 0)"
      }}>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">

            <div className="social-text">
              Get in Touch
            </div>

            <div className="columns">
              
              <div className="column is-12 social">

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
        </div>
      </footer>
    )
  }
}

export default Footer
