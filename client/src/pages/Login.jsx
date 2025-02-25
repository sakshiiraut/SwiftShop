import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import "./login.css";
import uilogin from "../assets/uilogin.png"
import { useNavigate } from 'react-router-dom';
import { UseLoginContext } from '../contextapi/logincontext';
const Login = () => {
  const Navigate = useNavigate();
  const [email,setemail] = useState("");
  const {tokensetter} = UseLoginContext();


  
  const handlesubmit = async(e) => {
    e.preventDefault();
    // Your code to handle form submission goes here.
    try {
      const response = await fetch("http://localhost:3000/login/api",
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name:"dd",password:"pass",email }),
        }
      )
      const resp = await response.json();
      console.log(resp);
      tokensetter(resp.token)
      
     if(!response.ok){
       alert("Invalid credentials")
       return;
     }

    } catch (error) {
      console.log(error);
      
    }finally{
 // update the user in the context
      Navigate("/");
    }



    //on succesfull submission
    // Redirect to home page
    
  }
  return (
    <>
      <div className="container">
        <div className="left-section">
          <Link to="/" className="back-button">Back to website</Link> 
          <h2>Shopping? One place<br />Walmart</h2>
        </div>
        <div className="right-section">
          <h2>Create an account</h2>
          <form onSubmit={handlesubmit}>
            <div style={{ display: 'flex', gap: '4%' }}>
              <input type="text" style={{ width: '100%' }} placeholder="First Name"  />
              <input type="text" style={{ width: '100%' }} placeholder="Last Name"  />
            </div>
            <input type="email" placeholder="Email"  onChange={(e)=>{setemail(e.target.value)}} value={email}/>
            <input type="password" placeholder="Enter your password"  />
            <div>
              <label htmlFor="terms">
                <input type="checkbox" id="terms"  /> I agree to the Terms & Conditions
              </label>
            </div>
            <button type="submit" style={{ color: 'black', backgroundColor: 'rgb(76, 255, 130)' }}>Create account</button>
          </form>
          <div className="sign-in">
            Already registered? <Link to="/login">Sign In</Link>
          </div>
          <div className="social-buttons">
            <div style={{ display: 'flex', gap: '4px', width: '100%' }}>
              <button className="social-button google" style={{ width: '100%' }}>Google</button>
              <button className="social-button apple" style={{ width: '100%' }}>Apple</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
