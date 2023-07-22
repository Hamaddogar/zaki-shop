import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Introduction from '../components/marketingPage/Introduction'
import header from '@/app/styles/header.module.css'
import OneApp from '../components/marketingPage/OneApp'
import LunchCamp from '../components/marketingPage/LunchCamp'
import AdsManage from '../components/marketingPage/AdsManage'
import HowWork from '../components/marketingPage/HowWork'
import GrnerateLeads from '../components/marketingPage/GrnerateLeads'

const Marketing = () => {
  return (
    <div>
      <Introduction hgap={{ xs: '48px', sm: '70px', md: '100px', lg: '108px' }}>
        <Header mainStyle={header.mainMarketing} menu={'dark'} />
      </Introduction>
      <OneApp />
      <LunchCamp />
      <AdsManage />
      <HowWork />
      <GrnerateLeads />

      <Footer />
    </div>
  )
}

export default Marketing
