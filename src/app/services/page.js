import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Introduction from '../components/sevicesPage/Introduction'
import header from '@/app/styles/header.module.css'
import ServiceCards from '../components/sevicesPage/ServiceCards'
import PaymentIntegration from '../components/sevicesPage/PaymentIntegration'
import BrandIntegration from '../components/sevicesPage/BrandIntegration'
import ThemeCustomization from '../components/sevicesPage/ThemeCustomization'
import BookingSession from '../components/sevicesPage/BookingSession'
import ChoosePlan from '../components/sevicesPage/ChoosePlan'

const Home = () => {
  return (
    <div>
      <Header mainStyle={header.mainService} menu={'light'} />
      <Introduction />
      <ServiceCards />
      <PaymentIntegration />
      <BrandIntegration />
      <ThemeCustomization />
      <BookingSession />
      <ChoosePlan />
      <Footer />
    </div>
  )
}

export default Home
