import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header/Header.tsx'
import ServiceDescription from "./components/ServiceDescription/ServiceDescription.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Header/>
      <ServiceDescription/>
  </React.StrictMode>,
)
