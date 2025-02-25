import React from 'react'
import "../pages/product.css"
import { UseCardContext } from '../contextapi/cardcontext';

const Product = () => {

    const { product} = UseCardContext();
    
    
  return <>
  
 



  <div className="product-wrapper">
    <div className="product-page">
      <div className="product-image">
        <img src={product.url} alt="Gildan Men's Crew T-Shirts"/>
      </div>
      <div className="product-details">
        <h1 className="shirt-heading">{product.name}</h1>
        <div className="rating">
          4.6 <span className="star">★★★★★</span>
        </div>
        <div className="price">
          Price: {product.price}
        </div>
        <div className="color">
          Brand: {product.brand}
          
        </div>
        <div className="size">
          Size:
          <div className="size-options">
            <label><input type="radio" name="size" value="S"/> S</label>
            <label><input type="radio" name="size" value="M"/> M</label>
            <label><input type="radio" name="size" value="L"/> L</label>
            <label><input type="radio" name="size" value="XL"/> XL</label>
            <label><input type="radio" name="size" value="XXL"/> XXL</label>
          </div>
        </div>
        <div className="product-description">
          <h3 className="description-heading">Product details</h3>
          <ul className="description-list">
            <li>Fabric type: 100% Cotton</li>
            <li>Care instructions: Machine Wash</li>
            <li>Origin: Imported</li>
            <li>Closure type: Pull On</li>
          </ul>
        </div>
        <div className="buy-button">
          <button className="cart-button">Add to Cart</button>
          <button className="list-button">Add to List</button>
        </div>
      </div>
    </div>
  </div>


  </>
}

export default Product