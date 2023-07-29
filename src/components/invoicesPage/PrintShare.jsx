import React from 'react'
import invoices from '@/styles/Invoices.module.css'
import Picture from '../reuse/Picture'
import { Box, Typography } from '@mui/material'
import printlg from '@/components/images/printlg.svg'
import printxs from '@/components/images/printxs.svg'

const PrintShare = ({ content }) => {

  return (
    <div className={invoices.printShareMain}>
      <Typography className={invoices.titleIntegration} sx={{ color: '#FFFFFF' }} textAlign={'center'}  >
        {content.title[0]} <br /> {content.title[1]}
      </Typography>
      <Box display={{ xs: 'none', md: 'block' }} mt={'50px'} width={{ xs: '90%', md: '80%' }} marginLeft='auto' marginRight='auto'>
        <Picture src={printlg} width={1201} height={615} alt='' />
      </Box>
      <Box display={{ xs: 'block', md: 'none' }} pb={{ xs: 10, md: 0 }} mt={'50px'} width={{ xs: '90%', md: '80%' }} marginLeft='auto' marginRight='auto'>
        <Picture src={printxs} width={375} height={779} alt='' />
      </Box>
    </div>
  )
}

export default PrintShare
