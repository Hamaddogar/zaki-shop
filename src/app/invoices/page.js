import React from 'react'
import Footer from '../components/Footer'
import Introduction from '../components/invoicesPage/Introduction'
import PrintShare from '../components/invoicesPage/PrintShare'
import Finance from '../components/invoicesPage/Finance'
import CreateManage from '../components/invoicesPage/CreateManage'
import PaymentIntegration from '../components/invoicesPage/PaymentIntegration'
import Template from '../components/invoicesPage/Template'

const Invoices = () => {
  return (
    <div>
      <Introduction />
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
