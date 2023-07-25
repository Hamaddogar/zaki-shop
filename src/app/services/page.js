import React from 'react'
import Footer from '../components/Footer'
import Introduction from '../components/sevicesPage/Introduction'
import ServiceCards from '../components/sevicesPage/ServiceCards'
import PaymentIntegration from '../components/sevicesPage/PaymentIntegration'
import BrandIntegration from '../components/sevicesPage/BrandIntegration'
import ThemeCustomization from '../components/sevicesPage/ThemeCustomization'
import BookingSession from '../components/sevicesPage/BookingSession'
import ChoosePlan from '../components/sevicesPage/ChoosePlan'

const Service = () => {
  return (
    <div>
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

export default Service
