import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { CardProvider } from './contextapi/cardcontext.jsx'
import { LoginProvider} from './contextapi/logincontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  
    <BrowserRouter>
    <LoginProvider>
   <CardProvider>


    <App />


   </CardProvider>
    </LoginProvider>
    </BrowserRouter>
   
  
)
