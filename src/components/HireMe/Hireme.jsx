import React from 'react';
import './hireme.css';
import Avatar from '../../assets/avatar.png';

const Hireme = () => {
  return (
    <div className='hireme-container'>
      <div className='hireme-img-container'>
        <img className='hireme-img' src={Avatar} alt="Avatar" />
      </div>
      <div className='hireme-content-container'>
        <h1 className='hireme-heading'>Why <span className='hireme-span'>Hire me</span>?</h1>
        <p className='hireme-description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
        <h3 className='hireme-projectCount'>25+</h3>
        <p className='hireme-description'>Projects Completed</p>
        <button className='hireme-btn'>Hire me</button>
      </div>
    </div>
  )
}

export default Hireme