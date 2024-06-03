import React, { useEffect, useState } from 'react';
import './home.css';
import Home1 from '../../assets/home1.png';
import Home2 from '../../assets/home2.png';


const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  const setHovered = () =>{
    setTimeout(() => {
      setIsHovered(!isHovered);
    }, 100);
  }

  return (
    <div className='home-container'>
      {/* <img className="home-img" onMouseEnter={setHovered} onMouseLeave={setHovered} src={isHovered ? Home2 : Home1} alt='Home'/> */}
    </div>
  )
}

export default Home