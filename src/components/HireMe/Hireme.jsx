import React from 'react';
import './hireme.css';
import Avatar from '../../assets/avatar.png';

const Hireme = () => {
  return (
    <div className='hireme-container' id='resume'>
      <div className='hireme-img-container'>
        <img className='hireme-img' src={Avatar} alt="Avatar" />
      </div>
      <div className='hireme-content-container'>
        <h1 className='hireme-heading'>Why <span className='hireme-span'>Hire me</span>?</h1>
        <p className='hireme-description'>As an aspiring software developer, I bring a strong foundation in C++ and JavaScript, along with expertise in the MERN stack and database management. My diverse project portfolio showcases my adaptability and ability to work on various projects. </p>
        <h3 className='hireme-projectCount'>25+</h3>
        <p className='hireme-description'>Projects Completed</p>
        <button className='hireme-btn'><a href="https://drive.google.com/file/d/1Df6Jsz6HKB1gHfX419UJyudk72cPZpTA/view?usp=sharing" target="_blank">Hire me</a></button>
      </div>
    </div>
  )
}

export default Hireme