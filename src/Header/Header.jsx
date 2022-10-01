import React, { useState } from 'react'
import './Header.css'
import Logo from '../assets/logo.png'
import Bars from '../assets/bars.png'
import { Link } from 'react-scroll'

const Header = () => {

const mobile = window.innerWidth<=768 ? true: false
const [menuOpened, setMenuOpened] = useState(false)

  return (
    <div className='header'>
      <img src={Logo} alt="" className='logo'/>
      {(menuOpened===false && mobile===true)? (
        <div
         style={{backgroundColor: 'var(--appColor)',
         padding: '0.5rem',
         borderRaduis: '5px'}}
         
         onClick={() => setMenuOpened(true)}
         >
           <img src={Bars} alt="" 
           style={{width: '1.5rem', height: '1.5rem'}} /> </div>
      ): (
      <ul className='header-menu'>
        <li >
        <link 
        onClick={() => setMenuOpened(false)}
        activeclass="active"
        to='header'
        spy='true'
        smooth='true'
        ></link>Home</li>
        <li onClick={() => setMenuOpened(false)} >Programs</li>
        <li onClick={() => setMenuOpened(false)} >Why us</li>
        <li onClick={() => setMenuOpened(false)} >Plans</li>
        <li onClick={() => setMenuOpened(false)} > <Link
        onClick={() => setMenuOpened(false)}
        to='Testimonials'
        spy={true}
        smooth={true}
        ></Link>Testimonials</li>
      </ul>
     )}
      
    </div>
  )
}

export default Header
