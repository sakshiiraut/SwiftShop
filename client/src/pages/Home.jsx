import React, { useState } from 'react'
import { UseCardContext } from '../contextapi/cardcontext'
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  const {cards,ApplyPriceFilter} = UseCardContext();
let brand,price,size;
  const addfilter = async(e,name)=>{
    let value = await e.target.text;
    
    if(name=='brand') brand = value;
    if(name=='price') price = value;
    if(name=='size') size = value;
    if(name=='remove') {
      brand = price = size = undefined;
    }

    try {
        console.log(brand,size,price);
        
        ApplyPriceFilter(brand,size,price);
     
    } catch (error) {
        
    }finally{

    }
    
  }
  return <>

    <header className="header-container">
        <div className="walmart-name">SwiftShop</div>
        <input type="text" className="search-bar" placeholder="What's on your mind?"/>
        <div className="button-group">
            <button> Hot Deals </button>
            <button    onClick={()=>{navigate("/Qrscanner")}}  >Scan QR</button>
            <button    onClick={()=>{navigate("/Login")}} >Sign In</button>
            <button className="profile-button"><i className="fa-solid fa-user"></i></button>
        </div>
    </header>

    <nav className="main-nav">
        <div className="sec-container">
            <div className="dropdown">
                <button className="dropdown-button" onClick={(e)=>{addfilter(e,"remove")}} > Explore All</button>
            </div>
            <div className="dropdown">
                <button className="dropdown-button">Size▼</button>
                <div className="dropdown-content" onClick={(e)=>{addfilter(e,"size")}}>
                    <a href="#">M</a>
                    <a href="#">L</a>
                    <a href="#">XL</a>
                    <a href="#">XXL</a>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropdown-button">Brand ▼</button>
                <div className="dropdown-content" onClick={(e)=>{addfilter(e,"brand")}}>
                    <a href="#">Levi's</a>
                    <a href="#">Peter England</a>
                    <a href="#">Allen Solly</a>
                    <a href="#">Leriya Fashion</a>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropdown-button">Price ▼</button>
                <div className="dropdown-content" onClick={(e)=>{addfilter(e,"price")}}>
                    <a href="#">Upto 300</a>
                    <a href="#">Upto 500</a>
                    <a href="#">500+</a>
                </div>
            </div>
        </div>
    </nav>

    <section className="product-cards">
    
    {cards && cards.length > 0 ? (
  cards.map((card, index) => {
    return (
      <div key={index}>{card}</div>
    );
  })
) : (
  //loader html
  /* From Uiverse.io by Nawsome */ 
<svg className="pl" width="240" height="240" viewBox="0 0 240 240" >
	<circle className="pl__ring pl__ring--a" cx="120" cy="120" r="105" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 660" strokeDashoffset="-330" strokeLinecap="round"></circle>
	<circle className="pl__ring pl__ring--b" cx="120" cy="120" r="35" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 220" strokeDashoffset="-110" strokeLinecap="round"></circle>
	<circle className="pl__ring pl__ring--c" cx="85" cy="120" r="70" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 440" strokeLinecap="round"></circle>
	<circle className="pl__ring pl__ring--d" cx="155" cy="120" r="70" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 440" strokeLinecap="round"></circle>
</svg>
)}

    
    </section>

    <footer className="footer">
        <p>&copy; 2024 Walmart</p>
    </footer>


    </>
  
}

export default Home