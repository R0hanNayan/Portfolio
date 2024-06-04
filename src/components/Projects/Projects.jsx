import React from 'react';
import './projects.css';
import Cards from '../../utils/Cards/Cards';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Projects = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    lazyLoad: true,
    centerMode: true,
    focusOnSelect: true,
  };

  return (
    <div className='project-container'>
      <p className='projects'>My <span className='projects-span'>Projects</span></p>
      <Slider className='project-list' {...settings}>
        <div className='card'>
          <Cards />
        </div>
        <div className='card'>
          <Cards />
        </div>
        <div className='card'>
          <Cards />
        </div>
      </Slider>
    </div>
  )
}

export default Projects