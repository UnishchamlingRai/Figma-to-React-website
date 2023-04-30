import React, { useState } from 'react'
import './Navbar.css'
import { arrow,logo,menu,close } from '../../assets'
const Navbar = () => {
 const[menuActive,setMenuActive]=useState(false)
  return (
    <div className='app_navbar element_center universal_padding'>

      <div className="app_navbar_logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="app_navbar_links">
        <ul className='default_paragraph element_center'>
          <li><a className='link_acitive' href="#Home">Home</a></li>
          <li><a href="#Coupons">Coupons</a></li>
          <li><a href="#FAQ">FAQ</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
      </div>

      <div className="app_navbar_btn defaultBtn">
        <h4>Start Saving</h4>
        <img src={arrow} alt="arrow" />
      </div>

      {menuActive ? <img className='menuimg' src={close} alt='menu' onClick={()=>setMenuActive(false)} />:<img className='menuimg' src={menu} alt='close' onClick={()=>setMenuActive(true)}/>}

      {menuActive &&(
        <>
         <div className="app_navbar_menu_links sidebar">
        <ul className='default_paragraph element_center'>
          <li><a className='link_acitive' href="#Home">Home</a></li>
          <li><a href="#Coupons">Coupons</a></li>
          <li><a href="#FAQ">FAQ</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
      </div>
        </>
      )}
    </div>
  )
}

export default Navbar