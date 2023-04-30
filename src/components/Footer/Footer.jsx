import React from 'react'
import './Footer.css'
import { logo, social } from '../../assets'
const Footer = () => {
  return (
    <div className='app_footer universal_padding'>
     <div className="app_footer_top">
     <div className="app_footer_logo">
        <img src={logo} alt="" />
      </div>

      <ul className='default_paragraph'>
        <li><a href="#Home">Home</a></li>
        <li><a href="#Coupons">Coupons</a></li>
        <li><a href="FAQ">FAQ</a></li>
        <li><a href="Contact">contact</a></li>
      </ul>
     </div>




     <div className="app_footer_button">
      <div className="app_footer_button_socialIcon">
        <img src={social} alt="" />
      </div>

      <p className='default_paragraph'>Copyright 2022-2023 @ Couply LLC </p>
     </div>

      
    </div>
  )
}

export default Footer