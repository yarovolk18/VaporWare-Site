import React from 'react'
import './Team.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
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
     <div className='team'>
        <h2>Team</h2>
      </div>

      <Swiper className='team__container'
        modules={[Autoplay, Pagination]}
        spaceBetween={10}
        slidesPerView={2}
        centeredSlides={true} 
        Swiper loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false , reverseDirection: true}}
        speed={2000}
        // Add breakpoints for different screen sizes
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1, // 1 slide for small screens
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2, // 2 slides for medium screens
          },
          // when window width is >= 1024px
          1024: { 
            slidesPerView: 3, // 3 slides for large screens
          },
          // when window width is >= 1440px
          1440: {
            slidesPerView: 3, // 4 slides for extra large screens
          }
        }}
        >
          
        {
          data.map(({id, image, title, job, linkedin, demo}) => {
            return(
              <SwiperSlide key={id} className="team__item">
                  <img src={image} alt='none' className="team__item__image"></img>
                  <h4>{title}</h4>
                  <h4>{job}</h4>
                  <div className="team__item-cta">
                      <a href={linkedin} className='btn-secondary'>Linkedin</a>
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