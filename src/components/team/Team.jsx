import React from 'react'
import './Team.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Image imports
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
    title: 'Devon Knight',
    job:'Software Developer' ,
    linkedin: 'https://www.linkedin.com/in/devonknight',
  }
  ,
  {
    id: 2,
    image: KENNY,
    title: 'Kenny Ratcliffe',
    job:'Software Developer' ,
    linkedin: 'https://www.linkedin.com/in/kenny-ratcliffe-4873b522b/',
  }
  ,
  {
    id: 3,
    image: YARO,
    title: 'Yaro Volkov',
    job:'Software Developer' ,
    linkedin: 'https://www.linkedin.com/in/yaro-volkov',
  }
  ,
  {
    id: 4,
    image: MALCOLM,
    title: 'Malcolm Maloughney',
    job:'Physics Developer' ,
    linkedin: 'https://www.linkedin.com/in/malcolm-moloughney-408408275/',
  }
  ,
  {
    id: 5,
    image: SAM,
    title: 'Samuel Hart',
    job: 'Lead Designer' ,
    linkedin: 'https://www.linkedin.com/in/samuel-hart-94b9a7249/',
  }
]

const Team = () => {
  return (
    <section id = 'team'>
     <div className="team">
        <h2>Team</h2>
      </div>

      <Swiper className="team__container"
        modules={[Pagination]}
        spaceBetween={-1}
        slidesPerView={2}
        Swiper loop={true}
        pagination={{ clickable: true }}
        >

        {
          data.map(({id, image, title, job, linkedin, demo}) => {
            return(
              <SwiperSlide key={id} className="team__item">
             
                  <img src={image} alt='none' className="team__item__image"></img>
                  <h4>{title}</h4>
                  <h5>{job}</h5>
                  <div className="team__item-cta">
                      <a href={linkedin} className='btn-primary'>Linkedin</a>
                  </div>
               
              </SwiperSlide>
            )
          }
        )
        }
      
      </Swiper>

    </section>
  )
}

export default Team