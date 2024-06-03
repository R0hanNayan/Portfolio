import React from 'react'
import "./navbar.css";
import Button from '../../utils/Buttons/Button';
import Logo from '../../utils/Logo/Logo';

const Navbar = () => {

  return (
    <div className='nav-container'>
      <Button title={"Home"}/>
      <Button title={"About"}/>
      <Button title={"Services"}/>
      <Logo />
      <Button title={"Resume"}/>
      <Button title={"Project"}/>
      <Button title={"Contact"}/>
    </div>
  )
}

export default Navbar