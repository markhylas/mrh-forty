import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { BannerLandingHighPoint } from '../components/BannerLanding'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'
import NewJersey_GIF from '../assets/images/NewJersey_GIF.gif'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Mark Hylas | Welcome!</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLandingHighPoint />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>A brief overlook of what 3D analysis can provide.</h2>
                    </header>
                    <p>I grew up next to HighPoint, NJ and I have always been curious hike around this famous natural state monument. Naturally, other
quesitons arise such as how steep is this point compared to other points of NJ, or how does this terrain compare with the other
two thirds of the state. Some basic analysis was done to a DEM map of NJ to help answer some of these questions.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={NewJersey_GIF} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>DEM to 3D Model</h3>
                            </header>
                            <p>The highest point of New Jersey is unironically called, High Point. It sits at 1,804 feet and drastically declines to below
        200 feet for central and south New Jersey. This is 3D image was produced from a statewide DEM. ArcGIS 3D scenes was the tool
        used to create this model.</p>
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
                                <h3>Height Analysis</h3>
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
