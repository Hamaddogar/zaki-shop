import React from 'react'
import Introduction from '@/components/invoicesPage/Introduction'
import Footer from '../components/Footer'
import PrintShare from '@/components/invoicesPage/PrintShare'
import Finance from '@/components/invoicesPage/Finance'
import CreateManage from '@/components/invoicesPage/CreateManage'
import PaymentIntegration from '@/components/invoicesPage/PaymentIntegration'
import Template from '@/components/invoicesPage/Template'
import { AppContext } from '@/AppContext'

const Invoices = () => {
  const { content } = React.useContext(AppContext);
  return (
    <div>
      <Introduction content={content.invoices.Introduction} BTNS={content.buttons} />
      <Finance content={content.invoices.Finance} BTNS={content.buttons} />
      <CreateManage content={content.invoices.CreateManage} BTNS={content.buttons} />
      <PaymentIntegration content={content.invoices.PaymentIntegration} BTNS={content.buttons} />
      <Template content={content.invoices.Template} BTNS={content.buttons} />
      <PrintShare content={content.invoices.PrintShare} BTNS={content.buttons} />
      <Footer content={content.footer} />
    </div>
  )
}

export default Invoices
