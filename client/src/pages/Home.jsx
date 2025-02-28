import React, { useState } from 'react'
import { UseCardContext } from '../contextapi/cardcontext'
import { useNavigate } from 'react-router-dom';
import logo from "../assets/image.png";
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
      console.log(error);
    }finally{
      // cleanup or final actions if needed
    }
    
  }
  return <>

    <header className="header-container">
    <div className="walmart-name" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
  <span style={{ fontWeight: "bold", fontSize: "24px" }}>SwiftShop</span>
  <img 
    src={logo} 
    alt="Logo" 
    style={{ 
      width: "35px", 
      height: "35px", 
      borderRadius: "50%", 
      objectFit: "cover", 
      marginLeft: "-2px", 
      border: "2px solid white", 
      boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)", 
      backgroundColor: "#fff", 
      padding: "2px"
    }} 
  />
</div>
        <input type="text" className="search-bar" placeholder="What's on your mind?"/>
        <div className="button-group">
            <button> Hot Deals </button>
            <button    onClick={()=>{navigate("/Qrscanner")}}  >Scan QR</button>
            <button    onClick={()=>{navigate("/Login")}} >Sign In</button>
            <button className="profile-button p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-200">
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth="1.5" 
    stroke="currentColor" 
    className="w-6 h-6 text-gray-700"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" 
    />
  </svg>
</button>

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
        <p>&copy; 2024 SwiftShop</p>
    </footer>


    </>
  
}

export default Home
