'use client'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Introduction from '../components/sevicesPage/Introduction'
import header from '@/app/styles/header.module.css'
import ServiceCards from '../components/sevicesPage/ServiceCards'
import PaymentIntegration from '../components/sevicesPage/PaymentIntegration'
import BrandIntegration from '../components/sevicesPage/BrandIntegration'
import ThemeCustomization from '../components/sevicesPage/ThemeCustomization'

const Home = () => {
  return (
    <div>
      <Header mainStyle={header.mainService} page={'services'} />
      <Introduction />
      <ServiceCards />
      <PaymentIntegration />
      <BrandIntegration />
      <ThemeCustomization />
      <Footer />
    </div>
  )
}

export default Home
