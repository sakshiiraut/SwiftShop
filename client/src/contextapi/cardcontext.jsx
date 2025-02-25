import React, { createContext, useContext, useEffect, useState ,useMemo} from "react";
import { MdOutlineStar } from "react-icons/md";
import {useNavigate} from "react-router-dom"
// Create AuthContext
export const CardContext = createContext();

// Provide AuthContext
export const CardProvider = ({ children }) => {
  const [cards, setCards] = useState(null);
  const [loading,setloading] = useState(false);
  const [product,setproduct] = useState(null);
  const navigate = useNavigate();

  async function gotoproduct(object){
    setproduct(object);
    navigate("/product");
    
  }
  
  useEffect(() => {
        
        
        // Fetch data from an API or any other source
      getData();
        async function getData() {
          try {
            setloading(true);
            
            const response = await fetch('http://localhost:3000/home/v1/api');
            const data = await response.json();
            
            
            const ShowCards = data.map((object) => {
              return (
                <div className="box" onClick={()=>gotoproduct(object)}>
            <img src={object.url} alt="img"/>
            <div className="row">
                <button className="tag">{object.size}</button>
                <button className="tag">{object.brand}</button>
                <button className="tag">Shelf: {object.location}</button>
            </div>
            <p className="title">{object.name}</p>
            <button type="button">${object.price}</button>
        </div>
        
              );
            });
            
            
          
            
            setCards(ShowCards);
            
            
          }
            
          catch (error) {
            console.log(error);
            
          }finally{
            setloading(false);
          }
        }
      }, []);


      const ApplyPriceFilter = async(brand,size,price) => {
   
          try{

            setloading(true);
            const response = await fetch('http://localhost:3000/home/v1/api',{
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ brand,size,price })
            })
            const data = await response.json();
            const showCards = data.map((object) => {
              
              return (
                <div className="box" onClick={(e)=>gotoproduct(object)}>
            <img src={object.url} alt="img"/>
            <div className="row">
                <button className="tag">{object.size}</button>
                <button className="tag">{object.brand}</button>
                <button className="tag">Shelf: {object.location}</button>
            </div>
            <p className="title">{object.name}</p>
            <button type="button">${object.price}</button>
        </div>
              );
            });
        setCards(showCards);    
        
          } catch (e) {
            console.log(e);
            
          }finally{
            setloading(false);
          }
        }

    return (
        <CardContext.Provider value={{ cards , ApplyPriceFilter ,loading ,product}}>
            {children}
        </CardContext.Provider>
    );
};

// Custom hook to use AuthContext
export const UseCardContext = () => {
    const authContextValue = useContext(CardContext);
    if (!authContextValue) {
        throw new Error("card usage must be used within an AuthProvider");
    }
    return authContextValue;
};
