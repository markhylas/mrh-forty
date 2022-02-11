import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { BannerLandingMappingvsSurvey } from '../components/BannerLanding'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'
import mappingvssurvey from '../assets/images/mappingvssurvey.jpg'
import surveybased from '../assets/images/surveybased.jpg'
import Trimble_TDC600_1 from '../assets/images/Trimble_TDC600_1.jpg'
import GPS_Close_up from '../assets/images/GPS_Close_Up.jpg'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Mark Hylas | Welcome!</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLandingMappingvsSurvey />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Understanding the accuracy of both GPS technologies.</h2>
                    </header>
                    <p>Good decisions require good data. For GIS users, the quality of data coming out of their analysis depends on the accuracy of the data going in. In this project I tested the difference between mapping grade and RTK grade GPS.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={mappingvssurvey} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Using survey monuments to compare both GPS devices.</h3>
                            </header>
                            <p>This project mapped out the location of survey markers in Albuquerque, NM. Both mapping grade and real time kinematic GPS devices were used. As per each GPS device capabilities, the mapping grade GPS provided sub meter acuraccy, while RTK is accurate down to a centimeter. </p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={Trimble_TDC600_1} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Mapping Grade GPS </h3>
                            </header>
                            <p>To the right is an example of a mapping grade GPS. There are many reasons to use a device with only sub meter accuracy. The two most common reasons are cost, portability and speed of use. Recording spatial data on the fly fast-tracks the mapping and data analysis process.  </p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={GPS_Close_up} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Survey marker close up</h3>
                            </header>
                            <p>Photo to the left provides a closer look of a survey marker (the blue cross) and the accuracy delta between RTK and mapping grade GPS.</p>
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
