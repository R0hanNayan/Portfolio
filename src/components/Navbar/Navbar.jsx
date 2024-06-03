import React from 'react'
import "./navbar.css";
import Button from '../../utils/Buttons/Button';

const Navbar = () => {

  const items = ["title" ,"description" , "imageURL" , "newsURL"]
  return (
    <div className='nav-container'>
      <Button title={"Home"}/>
      <Button title={"About"}/>
      <Button title={"Services"}/>
      <Button title={"Resume"}/>
      <Button title={"Project"}/>
      <Button title={"Contact"}/>
    </div>
  )
}

export default Navbar