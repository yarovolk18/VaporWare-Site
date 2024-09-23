import React from 'react'
import './Header.css'
import LOGO from '../../assets/LOGO-removebg.png'
// import HeaderSocials from './HeaderSocials.jsx'

const Header = () => {
  return (
    <section id = 'header'>
      <header>
        <div className="container header__container">
          <div className='logo-image'>
            <img src = {LOGO} alt = ""/>
          </div>

          <h5 className = "text-light"> Game Studios </h5>
          {/*<HeaderSocials/>*/}
        </div>
      </header>
    </section>
    
  )
}

export default Header