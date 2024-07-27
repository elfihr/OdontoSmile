import React from 'react'
import '../style/Navbar.css'
import logo from '../assets/logo.png'
import { menuLinks } from '../helper/helper'
import { Sling as Hamburger } from 'hamburger-react'

const Navbar = () => {
  return (

    <nav className='navMenu'>
    {/* ====/Logo==== */}
    <div className='logoContainer'>
        <img src={logo} className='logo' alt='logo'/>
        <h3 className='logo'><b className='dBlue'>Odonto</b><b className='lBlue'>Smile</b></h3>
    </div>

    {/* ====/Icons==== */}
    <input type='checkbox' id='check'></input>
    <label htmlFor='check' className='iconMenu' >
        <Hamburger />
    </label>
    {/* ====/HiperLinks==== */}
    <div className='navBar'>
        {menuLinks.map((link, index) => {
            return (
                <ul key={index}>
                    <li className='navlinks'>
                        <a href={link.href} className={link.class}>{link.label}</a>
                    </li>
                </ul>
            )
        })}
    </div>
</nav>

  )
}

export default Navbar