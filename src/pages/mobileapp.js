import React from 'react'
import Footer from '@/components/Footer'
import Introduction from '@/components/mobileAppPage/Introduction'
import AppsCards from '@/components/mobileAppPage/AppsCards'
import Conversion from '@/components/mobileAppPage/Conversion'
import NoDeveloper1 from '@/components/mobileAppPage/NoDeveloper1'
import NoDeveloper2 from '@/components/mobileAppPage/NoDeveloper2'
import BookingSession from '@/components/sevicesPage/BookingSession'
import ChoosePlan from '@/components/sevicesPage/ChoosePlan'
import { AppContext } from '@/AppContext'

const MobileApp = () => {
  const { content } = React.useContext(AppContext); 
  return (
    <div>
      <Introduction content={content.mobileapp.Introduction} BTNS={content.buttons}/>
      <AppsCards content={content.mobileapp.AppsCards} BTNS={content.buttons}/>
      <Conversion content={content.mobileapp.Conversion} BTNS={content.buttons}/>
      <NoDeveloper1 content={content.mobileapp.NoDeveloper1} BTNS={content.buttons}/>
      <NoDeveloper2 content={content.mobileapp.NoDeveloper2} BTNS={content.buttons}/>
      <BookingSession content={content.services.BookingSession} BTNS={content.buttons}/>
      <ChoosePlan content={content.services.ChoosePlan} BTNS={content.buttons}/>
      <Footer content={content.footer} />
    </div>
  )
}

export default MobileApp
