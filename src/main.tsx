import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.styles.css'
import {previews} from "./models/Previews.ts"
import Header from './components/Header/Header.tsx'
import MainPreview from "./components/Preview/MainPreview/MainPreview.tsx";
import OurServices from "./components/OurServices/OurServices.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Header/>
      <MainPreview image={previews[0].image} textBold={previews[0].textBold}
      textLight={previews[0].textLight} textButton={previews[0].textButton}/>
      <OurServices/>
  </React.StrictMode>
)
