import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {GiHamburgerMenu }from "react-icons/gi";
import {TbCodeCircle2} from "react-icons/tb";

import '../css/navbar.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container2 parent-div">
        <div className="logo">
          <NavLink to="/" className="main-heading">
            <TbCodeCircle2 size={25}/> &nbsp;
          Priyanka Lakur Krishnamurthy
          </NavLink>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <GiHamburgerMenu />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`} onClick={handleShowNavbar}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
      
            <li>
              <NavLink to="/works">Works</NavLink>
            </li>

            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
          
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
