'use client'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Introduction from '../components/mobileAppPage/Introduction'
import header from '@/app/styles/header.module.css'
import AppsCards from '../components/mobileAppPage/AppsCards'
import BookingSession from '../components/mobileAppPage/BookingSession'
import ChoosePlan from '../components/mobileAppPage/ChoosePlan'
import Conversion from '../components/mobileAppPage/Conversion'
import NoDeveloper1 from '../components/mobileAppPage/NoDeveloper1'
import NoDeveloper2 from '../components/mobileAppPage/NoDeveloper2'

const MobileApp = () => {
  return (
    <div>
      <Header mainStyle={header.mainMobileApp} page={'home'} />
      <Introduction />
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
