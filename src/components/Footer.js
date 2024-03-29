import React from 'react'

const Footer = props => (
  <footer id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a href="https://twitter.com/Vermiliontech1" aria-label="Twitter" className="icon alt fa-twitter">
            <span className="label">Twitter</span>
          </a>
        </li>
        {/*<li>
          <a href="#" aria-label="Instagram" className="icon alt fa-instagram">
            <span className="label">Instagram</span>
          </a>
        </li>*/}
        {/*<li>
          <a href="#" aria-label="GitHub" className="icon alt fa-github">
            <span className="label">GitHub</span>
          </a>
        </li>*/}
        <li>
          <a href="https://www.linkedin.com/in/mark-hylas" aria-label="LinkedIn" className="icon alt fa-linkedin">
            <span className="label">LinkedIn</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>&copy; Hylas Maps</li>
        <li>
          Design: <a href="https://html5up.net">HTML5 UP</a>
        </li>
      </ul>
    </div>
  </footer>
)

export default Footer
