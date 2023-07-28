import React from 'react'
import invoices from '@/styles/Invoices.module.css'
import Picture from '../reuse/Picture'
import { Box, Typography } from '@mui/material'

const PrintShare = ({ content }) => {

  return (
    <div className={invoices.printShareMain}>
      <Typography className={invoices.titleIntegration} sx={{ color: '#FFFFFF' }} textAlign={'center'}  >
        {content.title[0]} <br /> {content.title[1]}
      </Typography>
      <Box display={{ xs: 'none', md: 'block' }} mt={'50px'} width={{ xs: '90%', md: '80%' }} marginLeft='auto' marginRight='auto'>
        <Picture src={'/printlg.svg'} width={1201} height={615} alt='' />
      </Box>
      <Box display={{ xs: 'block', md: 'none' }} mt={'50px'} width={{ xs: '90%', md: '80%' }} marginLeft='auto' marginRight='auto'>
        <Picture src={'/printxs.svg'} width={375} height={779} alt='' />
      </Box>
    </div>
  )
}

export default PrintShare
