import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "./global.css"
import Cosmos from './cosmosApp.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <Cosmos></Cosmos>
    </BrowserRouter>
   
    {/*<App />*/}
  </StrictMode>,
)
