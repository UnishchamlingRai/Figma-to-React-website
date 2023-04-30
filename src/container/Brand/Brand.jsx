
import React from 'react'
import './Brand.css'
import { amazon,Walmart,spotify,bestBuy,eye } from '../../assets'
const Brand = () => {
  return (
    <div className='app_brand universal_padding'>

     <div className="brand_name">
     <img src={amazon} alt="amazon" />
      <img src={Walmart} alt="amazon" />
      <img src={spotify} alt="spotify" />
      <img src={bestBuy} alt="bestBuy" />
     </div>

     <div className="eye element_center">
      <img src={eye} alt="eye" />
      <p className='default_paragraph' style={{color:'white'}}>View all brands</p>
     </div>
    </div>
  )
}

export default Brand