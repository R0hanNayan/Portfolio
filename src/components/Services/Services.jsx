import React from 'react';
import './services.css';
import ServiceCard from '../../utils/ServiceCard/ServiceCard';
import service1 from '../../assets/service1.png';
import service2 from '../../assets/service2.jpg';
import service3 from '../../assets/service3.png';

const Services = () => {
  return (
    <div className='services-container'>
      <p className='services-h'>My <span className='services-span'>Services</span></p>
      <div className='services-list'>
        <ServiceCard 
          title={"Front-End Development"}
          img={service1}
        />
        <ServiceCard 
          title={"Back-End Development"}
          img={service3}
        />
        <ServiceCard 
          title={"Software Development"}
          img={service2}
        />
      </div>
    </div>
  )
}

export default Services