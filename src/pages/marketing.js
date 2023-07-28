import React from 'react'
import Footer from '@/components/Footer'
import Introduction from '@/components/marketingPage/Introduction'
import OneApp from '@/components/marketingPage/OneApp'
import LunchCamp from '@/components/marketingPage/LunchCamp'
import AdsManage from '@/components/marketingPage/AdsManage'
import HowWork from '@/components/marketingPage/HowWork'
import GrnerateLeads from '@/components/marketingPage/GrnerateLeads'
import { AppContext } from '@/AppContext'

const Marketing = () => {
  const { content } = React.useContext(AppContext);
  return (
    <div>
      <Introduction content={content.marketing.Introduction} BTNS={content.buttons} />
      <OneApp content={content.marketing.OneApp} BTNS={content.buttons} />
      <LunchCamp content={content.marketing.LunchCamp} BTNS={content.buttons} />
      <AdsManage content={content.marketing.AdsManage} BTNS={content.buttons} />
      <HowWork content={content.marketing.HowWork} BTNS={content.buttons} />
      <GrnerateLeads content={content.marketing.GrnerateLeads} BTNS={content.buttons} />
      <Footer content={content.footer} />
    </div>
  )
}

export default Marketing
