import React from 'react'
import Picture from '../reuse/Picture'
import common from '@/styles/Common.module.css'
import header from '@/styles/Header.module.css'
import invoices from '@/styles/Invoices.module.css'
import { Box, Typography } from '@mui/material'
import { PrimaryBtn } from '../reuse/Buttons'
import Header from '../Header'
import HeaderMobile from '../HeaderMobile'
import invoicelg from '@/components/images/invoicelg.svg'
import invoicexs from '@/components/images/invoicexs.svg'

const Introduction = ({ content, BTNS }) => {

  return (
    <div className={common.BGI}>
      <div className={invoices.main} sx={{ backgroundSize: { xs: '80%', md: '70%', lg: 'auto' } }}>
        <Box pt={{ xs: '20px', md: '65px' }} >
          <Box sx={{ display: { xs: 'none', md: 'block' } }}> <Header mainStyle={header.mainInvoices} /> </Box>
          <Box sx={{ display: { xs: 'block', md: 'none' } }}> <HeaderMobile menu='dark' /> </Box>
        </Box>
        <Box pt={{ xs: '48px', sm: '70px', md: '100px', lg: '138px' }} pb={{ xs: '80px', md: '100px', lg: '120px' }}>
          <Box sx={{ color: '#FFFFFF' }} textAlign={'center'} width={{ xs: '80%', md: '100%' }} margin='auto'>
            <Typography
              fontWeight={{ xs: 800 }}
              fontSize={{ xs: '23px', md: '50px', lg: '50px' }}
              lineHeight={{ xs: '29px', md: '49px', lg: '49px' }}
            >
              {content.title[0]} < br />
              {content.title[1]}
            </Typography>
          </Box>
          <Box my="40px" textAlign='center'>
            <PrimaryBtn text={BTNS.start} />
          </Box>
          <Box>
            <Box sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' }, position: 'relative' }} margin='auto'>
              <Picture src={invoicelg} width={980} height={581} alt='' />
            </Box>
            <Box sx={{ display: { xs: 'block', sm: 'block', md: 'block', lg: 'none' }, position: 'relative' }} margin='auto'>
              <Picture src={invoicexs} width={360} height={376} alt='' />
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  )
}

export default Introduction
