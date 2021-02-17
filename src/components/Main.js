import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import cert_CSS from '../images/cert_CSS.JPG'
import cert_Electron from '../images/cert_Electron.jpg'
import cert_HTML from '../images/cert_HTML.JPG'
import cert_JS from '../images/cert_JS.JPG'
import cert_React from '../images/cert_React.JPG'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Economics graduate turned web developer. Turns out playing on
            computers is more fun. Check out my <a href="#work"> work</a>.
          </p>
          <p>Dabbled in Electron. Python. Settling with JS for now.</p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <a
              target={'_blank'}
              rel="noopener noreferrer"
              href="https://github.com/NikoGham/FFG_BUSINESS-PAGE"
            >
              <img src={pic02} alt="" />
            </a>
          </span>
          <p>
            Website for local grappling club. - UI Design - Built with React -
            Includes React-reveal, React-Scroll, TS-particles, React-Bootstrap.
            - Fully Responsive - Email, domain name and form submission
            configuration.
          </p>
          <p>
            I built this from a bare bones template. See click on image for
            github readme.md. Took a while to do both the UI and web
            development. Increased company exposure.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">CV/Education</h2>
          <span className="image main">
            <img src={cert_Electron} alt="" />
          </span>
          <p>

          </p>
          <span className="image main">
            <img src={cert_React} alt="" />
          </span>
          <p>

          </p>
          <span className="image main">
            <img src={cert_JS} alt="" />
          </span>
          <p>

          </p>
          <span className="image main">
            <img src={cert_CSS} alt="" />
          </span>
          <p>

          </p>
          <span className="image main">
            <img src={cert_HTML} alt="" />
          </span>
          <p>

          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                target={'_blank'}
                rel="noopener noreferrer"
                href="https://www.instagram.com/kolyaboga/"
                className="icon fa-instagram"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                target={'_blank'}
                rel="noopener noreferrer"
                href="https://www.freecodecamp.org/nikogham"
                className="icon fa-free-code-camp"
              >
                <span className="label">Freecodecamp</span>
              </a>
            </li>

            <li>
              <a href="https://github.com/NikoGham" className="icon fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
