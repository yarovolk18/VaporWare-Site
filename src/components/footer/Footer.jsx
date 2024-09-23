import React from 'react'
import './Footer.css'
import {FiInstagram} from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'
import LOGO from '../../assets/LOGO_SQUARE.png'
const Footer = () => {
  return (
    <footer>
      <h2><a href="#footer" className='footer_logo'>VaporWare</a></h2>
      <div className="small-logo-image">
          <img src = {LOGO} alt = ""/>
      </div>
      <ul className='permalinks'>
        <a href='#header'>Home</a>
        <a href='#about'>About</a>
        <a href="mailto:iaroslav.volkov18@gmail.com" target="_self">Contact</a>
      </ul>

      <div className="footer__socials">
        <a href="https://instagram.com/vaporware"><FiInstagram/></a>
        <a href="https://linkedin.com/in/yaro-volkov"><BsLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; VaporWare Inc. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer