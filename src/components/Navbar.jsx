import React from 'react'
import "../styles/navbar.css"
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <div className='nb'>
        <div className='nb-logo'>
            <img className='nb-logo-img' src={logo}/>
        </div>
        <div className='nb-links'>
            <a className='nb-link' href="#home">Home</a>
            <a className='nb-link' href="#services">Services</a>
            <a className='nb-link-button' href="#about">About Us</a>
        </div>
    </div>
  )
}

export default Navbar