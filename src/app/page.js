import React from 'react'
import Introduction from './components/homePage/Introduction';
import Header from './components/Header';
import Websites from './components/homePage/Websites';
import MobileApp from './components/homePage/MobileApp';
import Marketing from './components/homePage/Marketing';
import Invoices from './components/homePage/Invoices';
import DownloadApp from './components/homePage/DownloadApp';
import Footer from './components/Footer';
import home from '@/app/styles/header.module.css'

const Home = () => {

  // await new Promise(resolve => setTimeout(resolve, 100000000));


  return (
    <div>
      <Introduction hgap={{ xs: '20px', sm: '150px', md: '167px', lg: '200px' }}>
        <Header mainStyle={home.main} menu='dark' />
      </Introduction>
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
