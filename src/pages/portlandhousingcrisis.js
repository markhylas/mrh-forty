import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { BannerLandingPortlandHousingCrisis } from '../components/BannerLanding'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'
import tentcityfinal from '../assets/images/tentcityfinal.jpg'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Mark Hylas | Welcome!</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLandingPortlandHousingCrisis />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Housing, not handcuffs</h2>
                    </header>
                    <p>For the past 12 years Portland OR has experienced an increase of homeless persons. Many proposals have been put forth, but little has been effective. It has been proven that removing tent cities have costed the city more than it has helped. My map proposes a locations on where these encampents should be established with regulaton. </p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={tentcityfinal} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Poster encapsulating the proposal.</h3>
                            </header>
                            <p>The two main maps were created in both ArcMap and ArcGIS Pro. In the top portion the heatmap was made from Portlands homeless initiative point data, over the course of ten years. A point can be considered an abandoned or occupied tent(s).
The map below highlights the radius of an area that provides access to all essentials for individuals struggling with houselessness or addiction. Also, historically the two highlighted areas are where the majority of tents were setup.   </p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic09} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Rhoncus magna</h3>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic10} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Sed nunc ligula</h3>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
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
