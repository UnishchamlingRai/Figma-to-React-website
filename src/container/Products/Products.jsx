import React from 'react'
import './Products.css'
import { product1,product2,product3,product4,product5,product6 } from '../../assets'
const Products = () => {
  return (
    <div className='app_products universal_padding'>


      <div className="app_product_top">

        <div className="app_product_content samewidth">
          <img src={product5} alt="" />
          <div className="app_product_title">
            <h4>Men's Nike Shose</h4>
            <span>$50</span>
          </div>
        </div>

        <div className="app_product_content samewidth" style={{width:"300px"}}>
          <div className="app_product_title" style={{backgroundColor:"white"}}>
            <h4>Quick Arrow</h4>
            <span>$30</span>
          </div>
          <img src={product6} alt="" style={{height:"208px"}}/>
        </div>


        <div className="app_product_content samewidth" style={{width:"300px"}}>
          <div className="app_product_title" style={{backgroundColor:"white"}}>
            <h4>Headphone</h4>
            <span>$99</span>
          </div>
          <img src={product1} alt="" style={{height:"208px"}}/>

        </div>

        <div className="app_product_content samewidth" style={{width:"300px"}}>
          <div className="app_product_title">
            <h4>Heels</h4>
            <span>$50</span>
          </div>
          <img src={product2} alt="" style={{height:"208px"}}/>
        </div>


        <div className="app_product_content samewidth">
          <img src={product3} alt="" />
          <div className="app_product_title">
            <h4>Cool Shades</h4>
            <span>$69</span>
          </div>
        </div>



        <div className="app_product_content samewidth alcohol" style={{width:"300px"}}>
          <div className="app_product_title">
            <h4>Alcohol</h4>
            <span>$99</span>
          </div>
          <img src={product4} alt="" style={{height:"208px"}}/>
        </div>


      </div>

      
      
    </div>
  )
}

export default Products