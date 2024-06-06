import React from 'react';
import './serviceCard.css';

const ServiceCard = ({title, img}) => {
  return (
    <div className='serviceCard-container'>
        <div className='serviceCard-container-container'>
            <p className='serviceCard-title'>{title}</p>
            <p className='blank-line'></p>
            <img className='serviceCard-img' src={img} alt="services" />
        </div>
        <div className='serviceCard-curve'>
        </div>
    </div>
  )
}

export default ServiceCard