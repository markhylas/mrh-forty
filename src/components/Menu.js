import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/high-point">How High is High Point?</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/at-native-territories">AT Native Territories</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/alameda">Alameda Open Space</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/california-houseless">California Rent Increase</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/portlandhousingcrisis">Portland Housing Crisis</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/mappingvssurvey">Mapping vs Survey grade GPS</Link></li>
                {/*<li><Link onClick={props.onToggleMenu} to="/elements">Elements</Link></li>*/}
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
