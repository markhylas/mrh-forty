import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { BannerLandingAlameda } from '../components/BannerLanding'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'
import ALAMEDAFINAL from '../assets/images/ALAMEDAFINAL.jpg'
import alamedaphase1 from '../assets/images/alamedaphase1.jpg'
import alamedaphase2 from '../assets/images/alamedaphase2.jpg'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Mark Hylas | Welcome!</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLandingAlameda />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Overview of GPS tracking with TDC-100. </h2>
                    </header>
                    <p>The goal of this project was to map all openspace features. This includes park benches, trees, trails, trashcans and more. Equiped with a TDC-100, each set of features were collected with their own layer. This allowed to easily transfer coordinates and data to a GIS. The map was created as an aid for park employees to audit all property easier. Also, it can be turned into a map for visitors.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={ALAMEDAFINAL} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Final map including both phases.</h3>
                            </header>
                            <p>
At the end of the data collection I had just over 120 fields to parse through and import into the GIS. The field work also included getting the the peremeter of the open space and including the area/sq ft. I simply did this by using ArcMaps "calcualte geometry" after establishing a coordinate system. The majority of the work was done with the TDC-100 and some terrestial photography.</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={alamedaphase1} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Phase 1</h3>
                            </header>
                            <p>Bording the famous Paseo del Bosque Trail, phase 1 covers the more open
area to walk around.
There is a noticable error with the additional path that I included in phase 1. I  considered removing this in a vector editor, but I wanted the spatial data to reflect exactly what the GPS mapping device collected.</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={alamedaphase2} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Phase 2</h3>
                            </header>
                            <p>Phase two has closer access to the main parking lot. You are provided with a sellection of short trails and sufficient tree coverage. Nothing too large to get lost in but as detailed in the map, you will have ample seating if a visitor gets tired.
The field work was completed in a single visit since the TDC-100 can easily toggle between features as I am surveying and collecting data points.</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing
