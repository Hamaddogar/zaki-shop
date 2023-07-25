import React from 'react'
import Introduction from './components/homePage/Introduction';
import Websites from './components/homePage/Websites';
import MobileApp from './components/homePage/MobileApp';
import Marketing from './components/homePage/Marketing';
import Invoices from './components/homePage/Invoices';
import DownloadApp from './components/homePage/DownloadApp';
import Footer from './components/Footer';

const Home = () => {

  return (
    <div>
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
