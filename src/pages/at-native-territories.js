import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { BannerLandingAppalachianTrailNativeTerritories } from '../components/BannerLanding'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'
import ATC_NATIVE_TERRITORIES from '../assets/images/ATC_NATIVE_TERRITORIES.jpg'
import AT_Trail_Intersect from '../assets/images/AT_Trail_Intersect.jpg'
import Erase_Overlay from '../assets/images/Erase_Overlay.jpg'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Mark Hylas | Welcome!</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLandingAppalachianTrailNativeTerritories />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Completed map with all territories of influence that touch the A.T.</h2>
                    </header>
                    <p>Below is the completed map that displays every territory that the A.T. Traverses through. The A.T. runs through 22 Native Nations' traditional territories and holds an abundant amount of Indigenous American history. This A.T. map was created to provide A.T. hikers with a better understanding of the territories they are traversing through.  </p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={ATC_NATIVE_TERRITORIES} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Completed map with all territories of influence that touch the A.T.</h3>
                            </header>
                            <p>This is the completed map that displays every territory that the A.T. Traverses through. The A.T. runs through 22 Native Nations' traditional territories and holds an abundant amount of Indigenous American history. This A.T. map was created to provide A.T. hikers with a better understanding of the territories they are traversing through.</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={AT_Trail_Intersect} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Intersect of Territories</h3>
                            </header>
                            <p>A part of this project was to showcase the ability of ArcGIS Pro overlay toolset concepts. The map to the right shows only territories where they overlapped.</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={Erase_Overlay} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Erase Overlay</h3>
                            </header>
                            <p>This is the output of the erase tool. Similar overlay tool but this time I only displayed parts of territories that avoid overlap.</p>
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
