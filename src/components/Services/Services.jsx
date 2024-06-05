import React from 'react';
import './services.css';
import ServiceCard from '../../utils/ServiceCard/ServiceCard';

const Services = () => {
  return (
    <div className='services-container'>
      <p className='services-h'>My <span className='services-span'>Services</span></p>
      <div className='services-list'>
        <ServiceCard />
      </div>
    </div>
  )
}

export default Services