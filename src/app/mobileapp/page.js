'use client'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Introduction from '../components/mobileAppPage/Introduction'
import header from '@/app/styles/header.module.css'
import AppsCards from '../components/mobileAppPage/AppsCards'
import PaymentIntegration from '../components/mobileAppPage/PaymentIntegration'
import BrandIntegration from '../components/mobileAppPage/BrandIntegration'
import ThemeCustomization from '../components/mobileAppPage/ThemeCustomization'
import BookingSession from '../components/mobileAppPage/BookingSession'
import ChoosePlan from '../components/mobileAppPage/ChoosePlan'

const MobileApp = () => {
  return (
    <div>
      <Header mainStyle={header.mainService} page={'services'} />
      <Introduction />
      {/* <AppsCards />
      <PaymentIntegration />
      <BrandIntegration />
      <ThemeCustomization />
      <BookingSession />
      <ChoosePlan /> */}
      <Footer />
    </div>
  )
}

export default MobileApp
