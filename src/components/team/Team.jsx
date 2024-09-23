import React from 'react'
import './Team.css'
import DEVON from '../../assets/DEVON_HEADSHOT.jpg'
import KENNY from '../../assets/KENNY_HEADSHOT.jpg'
import YARO from '../../assets/YARO_HEADSHOT.jpg'
import MALCOLM from '../../assets/MALCOLM_HEADSHOT.jpg'
import SAM from '../../assets/SAM_HEADSHOT.jpg'
// import IMG6 from '../../assets/vwconceptart.png'

const data = [
  {
    id: 1,
    image: DEVON,
    title: 'Devon Knight, Software Developer',
    linkedin: 'https://www.linkedin.com/in/devonknight',
  }
  ,
  {
    id: 2,
    image: KENNY,
    title: 'Kenny Ratcliffe, Software Developer',
    linkedin: 'https://www.linkedin.com/in/kenny-ratcliffe-4873b522b/',
  }
  ,
  {
    id: 3,
    image: YARO,
    title: 'Yaro Volkov, Software Developer',
    linkedin: 'https://www.linkedin.com/in/yaro-volkov',
  }
  ,
  {
    id: 4,
    image: MALCOLM,
    title: 'Malcolm Maloughney, Physics Developer',
    linkedin: 'https://www.linkedin.com/in/malcolm-moloughney-408408275/',
  }
  ,
  {
    id: 5,
    image: SAM,
    title: 'Samuel Hart, Lead Designer',
    linkedin: 'https://www.linkedin.com/in/samuel-hart-94b9a7249/',
  }
]

const Team = () => {
  return (
    <section id = 'team'>
     <div className="team">
        <h2>Team</h2>
      </div>

      <div className="container team__container">

        {
          data.map(({id, image, title, linkedin, demo}) => {
            return(
              <article key={id} className="team__item">

                <div className="team__item-image">
                    <img src={image} alt="none"></img>
                </div>

                <h4>{title}</h4>

                <div className="team__item-cta">
                    <a href={linkedin} className='btn-primary'>Linkedin</a>
                </div>
             
            </article>
            )
          }
        )
        }
      
      </div>

    </section>
  )
}

export default Team