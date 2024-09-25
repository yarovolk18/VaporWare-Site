import React from 'react'
import './About.css' 
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import { FiFolderPlus } from "react-icons/fi"
import imageRoom from '../../assets/vwconceptart.png'


const About = () => {
  return (
    <section id ='about'>

      <div className="about">
        <h2>About VaporWare</h2>
      </div>

      <div className="container about__container">
        {/* TABLES */}
        <div className="about__content"> 
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Collective 25+ of Work Experience</small>
            </article> 

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Pizzas Eaten</h5>
              <small>50+ Pizzas</small>
            </article>

            <article className='about__card'>
              <FiFolderPlus className='about__icon'/>
              <h5>Projects</h5>
              <small>100+ Complete</small>
            </article>
          </div>
          {/* TEXT */}
        <div className="about__content">
          <p>
            Hey! We're a group of students from Ottawa, the capital of Ontario and we're working on a game! 
          </p>
          <p>
            We're looking to create a captivating horror game that will contain a ton of incredible features.
            Jump, climb, run hide, do whatever you can to surive!
          </p>
          <div className="about__button">
            <a href="#footer" className='btn btn-primary'> Let's Talk</a>
          </div>
        </div>
        </div>
        
        {/* image and talk */}
        <div className="about__content">
          <div className="about__me-image">
            <img src = {imageRoom} alt = ""/>
          </div>
        </div>
      </div>
        
    </section>
  )
}

export default About