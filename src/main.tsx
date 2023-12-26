import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.styles.css'
import {previews} from "./models/Previews.ts"
import Header from './components/Header/Header.tsx'
import MainPreview from "./components/Preview/MainPreview/MainPreview.tsx";
import OurServices from "./components/OurServices/OurServices.tsx";
import Preview1 from "./components/Preview/Preview1/Preview1.tsx";
import Preview2 from "./components/Preview/Preview2/Preview2.tsx";
import Articles from "./components/Articles/Articles.tsx";
import Footer from "./components/Footer/Footer.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Header/>
      <MainPreview image={previews[0].image} textBold={previews[0].textBold}
                   textLight={previews[0].textLight} textButton={previews[0].textButton}/>
      <OurServices/>
      <Preview1 image={previews[1].image} textBold={previews[1].textBold}
                textLight={previews[1].textLight} textButton={previews[1].textButton}/>
      <Preview2 image={previews[2].image} textBold={previews[2].textBold}
                textLight={previews[2].textLight} textButton={previews[2].textButton}/>
        <Articles/>
      <Footer/>
  </React.StrictMode>
)
