import './App.css'
import React from 'react'
import Info from './components/Info.jsx'
import InfoButton from './components/InfoButton.jsx'
import Detail from './components/Detail.jsx'
import Footer from './components/Footer.jsx'
import Huy from './assets/Huy.png'

function App() {
  return (
    <div className='card-container'>
      <img className="image" src={Huy} alt="" />
      <Info />
      <InfoButton />
      <Detail />
      <Footer />
    </div>
  )
}

export default App
