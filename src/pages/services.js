import React from 'react'
import Footer from '@/components/Footer'
import Introduction from '@/components/sevicesPage/Introduction'
import ServiceCards from '@/components/sevicesPage/ServiceCards'
import PaymentIntegration from '@/components/sevicesPage/PaymentIntegration'
import BrandIntegration from '@/components/sevicesPage/BrandIntegration'
import ThemeCustomization from '@/components/sevicesPage/ThemeCustomization'
import BookingSession from '@/components/sevicesPage/BookingSession'
import ChoosePlan from '@/components/sevicesPage/ChoosePlan'
import { AppContext } from '@/AppContext'

const Service = () => {
  const { content } = React.useContext(AppContext);
  return (
    <div>
      <Introduction content={content.services.Introduction} BTNS={content.buttons} />
      <ServiceCards content={content.services.ServiceCards} BTNS={content.buttons} />
      <PaymentIntegration content={content.services.PaymentIntegration} BTNS={content.buttons} />
      <BrandIntegration content={content.services.BrandIntegration} BTNS={content.buttons} />
      <ThemeCustomization content={content.services.ThemeCustomization} BTNS={content.buttons} />
      <BookingSession content={content.services.BookingSession} BTNS={content.buttons} />
      <ChoosePlan content={content.services.ChoosePlan} BTNS={content.buttons} />
      <Footer content={content.footer} />
    </div>
  )
}

export default Service
