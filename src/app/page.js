'use client'
import React from 'react'
import Introduction from './components/Introduction';
import Header from './components/Header';
import Websites from './components/Websites';
import MobileApp from './components/MobileApp';
import Marketing from './components/Marketing';
import Invoices from './components/Invoices';
import DownloadApp from './components/DownloadApp';
import Footer from './components/homePage/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <Introduction />
      <Websites />
      <MobileApp />
      <Marketing />
      <Invoices />
      <DownloadApp />
      <Footer />
    </div>
  )
}

export default Home
