import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.styles.css'
import Header from './components/Header/Header.tsx'
import ServiceDescription from "./components/ServiceDescription/ServiceDescription.tsx";
import OurServices from "./components/OurServices/OurServices.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Header/>
      <ServiceDescription image={"src/assets/header-picture.png"}/>
      <OurServices/>
  </React.StrictMode>
)
