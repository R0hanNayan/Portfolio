import React from 'react';
import './projects.css';
import Cards from '../../utils/Cards/Cards';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ProjectList from './index.js';

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
        {
          ProjectList.map((project) => {
            return(
              <Cards 
                title={project.name}
                description={project.description.length > 100 ? project.description.slice(0, 95)+'...' : project.description}
                img={project.img}
                link={project.link}
              />
            )
          })
        }
      </Slider>
    </div>
  )
}

export default Projects