import React from 'react'
import Footer from '../components/Footer'
import Introduction from '../components/mobileAppPage/Introduction'
import AppsCards from '../components/mobileAppPage/AppsCards'
import Conversion from '../components/mobileAppPage/Conversion'
import NoDeveloper1 from '../components/mobileAppPage/NoDeveloper1'
import NoDeveloper2 from '../components/mobileAppPage/NoDeveloper2'
import BookingSession from '../components/sevicesPage/BookingSession'
import ChoosePlan from '../components/sevicesPage/ChoosePlan'

const MobileApp = () => {
  return (
    <div>
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
