import React from 'react'
import "./navbar.css";
import Button from '../../utils/Buttons/Button';
import Logo from '../../utils/Logo/Logo';
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {

  return (
    <div className='nav-container' id='home'>
      <AnchorLink href="#home">
        <Button title={"Home"} />
      </AnchorLink>
      <AnchorLink href="#about">
        <Button title={"About"} />
      </AnchorLink>
      <AnchorLink href="#projects">
        <Button title={"Projects"} />
      </AnchorLink>
      <Logo />
      <AnchorLink href="#resume">
        <Button title={"Resume"} />
      </AnchorLink>
      <AnchorLink href="#services">
        <Button title={"Services"} />
      </AnchorLink>
      <AnchorLink href="#contact">
        <Button title={"Contact"} />
      </AnchorLink>
    </div>
  )
}

export default Navbar