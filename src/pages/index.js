import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'
import Banner from '../components/Banner'
import Layout from '../components/layout'
import geomaticsymbol from '../assets/images/geomaticsymbol.jpg'
import renttoohigh from '../assets/images/renttoohigh.jpg'
import tentillustration from '../assets/images/tentillustration.jpg'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Mark Hylas | Welcome!"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        ></Helmet>

        <Banner />

        <div id="main">
          <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${pic01})` }}>
              <Link
                aria-label="Link to Landing Page"
                to="/high-point"
                className="link primary"
              >
                <header className="major">
                  <h3>How High is High Point, NJ?</h3>
                  <p>An analysis on New Jerseys elevation.</p>
                </header>
              </Link>
            </article>
            <article style={{ backgroundImage: `url(${pic02})` }}>
              <Link
                aria-label="Link to Landing Page"
                to="/at-native-territories"
                className="link primary"
              >
                <header className="major">
                  <h3>Appalachian Trail & Native Territories</h3>
                  <p>Mapping our native territories of influence.</p>
                </header>
              </Link>
            </article>
            <article style={{ backgroundImage: `url(${geomaticsymbol})` }}>
              <Link
                aria-label="Link to Landing Page"
                to="/mappingvssurvey"
                className="link primary"
              >
                <header className="major">
                  <h3>Mapping vs Survey Grade<br/>GPS Analysis</h3>
                  <p>A technical comparison between RTK and mapping grade GPS.</p>
                </header>
              </Link>
            </article>
            <article style={{ backgroundImage: `url(${pic04})` }}>
              <Link
                aria-label="Link to Landing Page"
                to="/alameda"
                className="link primary"
              >
                <header className="major">
                  <h3>Alameda Open Space</h3>
                  <p>Capturing Open Space features with GPS data collection device.</p>
                </header>
              </Link>
            </article>
            <article style={{ backgroundImage: `url(${renttoohigh})` }}>
              <Link
                aria-label="Link to Landing Page"
                to="/california-houseless"
                className="link primary"
              >
                <header className="major">
                  <h3>California Houseless <br/>& Rent Increase</h3>
                  <p>QGIS with time manager helps ilustrate the trend of rent hikes and increase in houseless individuals.</p>
                </header>
              </Link>
            </article>
            <article style={{ backgroundImage: `url(${tentillustration})` }}>
              <Link
                aria-label="Link to Landing Page"
                to="/portlandhousingcrisis"
                className="link primary"
              >
                <header className="major">
                  <h3>Portland Houseless Crisis</h3>
                  <p>Rethinking alternative housing and why it starts with tents.</p>
                </header>
              </Link>
            </article>
          </section>
          <section id="two">
            <div className="inner">
              <header className="major">
                <h2>About Mark</h2>
              </header>
              <p>
              I branched off from working 13 years in I.T. as a system administrator and helpdesk support. I have too many hobbies to list but frequently gravitated to making maps and learning how I can combine this skill with a CNC router.
I am a certified sUAS pilot (FAA Part 107) and love to discover abandoned buildings and structures with my drone. Being able to reconstruct structures into a 3D models provides a new level analyses not just for the AEC sector but many of the sciences as well.
I am always looking to collaborate with other like minded GIS/UAS individuals on passion projects similar to what you have seen on my site.
You can reach out to me through the below social platforms but email will usually get the first response.
              </p>
              <ul className="actions">
                <li>
                  <Link
                    aria-label="Link to Landing Page"
                    to="/landing"
                    className="button next"
                  >
                    Get Started
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
