import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Introduction from '../components/mobileAppPage/Introduction'
import header from '@/app/styles/header.module.css'
import AppsCards from '../components/mobileAppPage/AppsCards'
import Conversion from '../components/mobileAppPage/Conversion'
import NoDeveloper1 from '../components/mobileAppPage/NoDeveloper1'
import NoDeveloper2 from '../components/mobileAppPage/NoDeveloper2'
import BookingSession from '../components/sevicesPage/BookingSession'
import ChoosePlan from '../components/sevicesPage/ChoosePlan'

const MobileApp = () => {
  return (
    <div>
      <Introduction hgap={{ xs: '48px', sm: '70px', md: '100px', lg: '108px' }}>
        <Header mainStyle={header.mainMobileApp} menu={'dark'} />
      </Introduction>
      <AppsCards />
      <Conversion />
      <NoDeveloper1 />
      <NoDeveloper2 />
      <BookingSession />
      <ChoosePlan />
      <Footer />
    </div>
  )
}

export default MobileApp
