import React from 'react';
import SlidingBar from './Components/slidingBar';
import Navbar from './Components/navBar';
import "../src/index.css"
import ModalBar from './Components/homeContent';
import HomeContent from './Components/homeContent';
import Footer from './Components/footer'

export default function App(){
  return(<>
  <SlidingBar/>
  <Navbar />
  <HomeContent/>
  <Footer/>
  </>)
}