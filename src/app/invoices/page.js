import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Introduction from '../components/invoicesPage/Introduction'
import header from '@/app/styles/header.module.css'
import PrintShare from '../components/invoicesPage/PrintShare'
import Finance from '../components/invoicesPage/Finance'
import CreateManage from '../components/invoicesPage/CreateManage'
import PaymentIntegration from '../components/invoicesPage/PaymentIntegration'
import Template from '../components/invoicesPage/Template'

const Invoices = () => {
  return (
    <div>
      <Introduction hgap={{ xs: '48px', sm: '70px', md: '100px', lg: '138px' }}>
        <Header mainStyle={header.mainInvoices} menu={'dark'} />
      </Introduction>
      <Finance />
      <CreateManage />
      <PaymentIntegration />
      <Template />
      <PrintShare />
      <Footer />
    </div>
  )
}

export default Invoices
