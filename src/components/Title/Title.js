import { NavLink } from 'react-router-dom'
import './Title.css';
import RandomSpace from '../RandomSpace/RandomSpace'

function Title() {
    return (
        <div className="Title">
            <header>
                <h1>SFPOPOS</h1>
                <div className="Title-Subtitle">San Francisco Privately Owned Public Open Spaces</div>

                <nav role="navigation">
                    <NavLink 
                        className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
                        to="/">List</NavLink>
                    <NavLink 
                        className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
                        to="/about">About</NavLink>
                    <NavLink 
                        className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
                        to="/newsletter">Newsletter</NavLink>
                    <RandomSpace />
                </nav>
            </header>
        </div>
    )
}
  
export default Title