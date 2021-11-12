import React from 'react'

const Banner = props => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <h1>I'm Mark. <br/>
        Your GIS & UAS swiss army knife</h1>
      </header>
      <div className="content">
        <p>
        I am a recent GIS & UAS graduate from Central New Mexico. I transitioned into the realm of Geospatial tech from a accomplished career in I.T.
        This stems from my passion for maps and 3D data modeling. My general focus has been using GIS to provide transparency of our nations houseless population. By leveraging both, my technical experience and geospatial prowess, I strive to be a advocate
        for our those in need of housing.
          <br />
          I consider myself as a "swiss army knife" geographic technology, not an expert in any particular category.
        </p>
        <ul className="actions">
          <li>
            <a href="#one" name="Get Started" className="button next scrolly">
              Get Started
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default Banner
